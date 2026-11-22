(function () {
  var PAGE = 6; // cards shown before "Show more"
  var all = (window.PROJECTS || []).slice();
  var state = { cat: "All", q: "", expanded: false };

  function esc(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* ---------- Visitor favorites (saved in this browser only) ---------- */
  var FAV_KEY = "imyos-favorites";
  var favs = [];
  try { favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]") || []; } catch (e) { favs = []; }
  function isFav(p) { return favs.indexOf(p.url) >= 0; }
  function toggleFav(url) {
    var i = favs.indexOf(url);
    if (i >= 0) favs.splice(i, 1); else favs.push(url);
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {}
  }
  function starBtn(p) {
    var on = isFav(p);
    return '<span class="star-btn' + (on ? " on" : "") + '" role="button" tabindex="0" data-fav="' + esc(p.url) + '" aria-pressed="' + on +
      '" aria-label="' + (on ? "Remove " : "Add ") + esc(p.title) + (on ? " from" : " to") + ' My Favorites" title="' + (on ? "Remove from" : "Save to") + ' My Favorites">' +
      (on ? "&#9733;" : "&#9734;") + "</span>";
  }

  // No image set? Use a free automatic screenshot of the live site.
  // If that fails, the colored letter mark underneath stays visible.
  // The screenshot service caches each address. Change a project's "shot" date
  // to force a fresh screenshot after the site is updated.
  function autoShot(url, shot) {
    if (shot) url += (url.indexOf("?") < 0 ? "?" : "&") + "v=" + encodeURIComponent(shot);
    return "https://s.wordpress.com/mshots/v1/" + encodeURIComponent(url) + "?w=960&h=540";
  }
  function thumb(p) {
    var src = p.image || autoShot(p.url, p.shot);
    return '<span class="mark">' + esc(p.mark || p.title.charAt(0)) + "</span>" +
      '<img src="' + esc(src) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" onerror="this.remove()" />';
  }

  /* ---------- Featured ---------- */
  var feat = document.getElementById("featured-grid");
  if (feat) {
    feat.innerHTML = (window.FEATURED || []).map(function (p) {
      var pts = (p.points || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
      return (
        '<a class="feature" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="--c:' + esc(p.color) + '">' +
          '<div class="feature-thumb">' + thumb(p) + '<span class="grade">' + esc(p.grades) + "</span>" + starBtn(p) + "</div>" +
          '<div class="feature-body">' +
            '<p class="feature-tag">' + esc(p.tagline) + "</p>" +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.desc) + "</p>" +
            '<ul class="checks">' + pts + "</ul>" +
            '<span class="btn feature-btn">Visit site &rarr;</span>' +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  /* ---------- Gallery filters ---------- */
  var FAV = "Favorites";
  var everything = (window.FEATURED || []).concat(all);
  // A project can sit in one category ("Games") or several (["Games", "Jobs"]).
  function catsOf(p) { return [].concat(p.category || []); }
  function inCat(p, c) { return c === "All" || (c === FAV ? isFav(p) : catsOf(p).indexOf(c) >= 0); }
  function favCount() { return everything.filter(isFav).length; }
  var cats = ["All", FAV];
  all.forEach(function (p) { catsOf(p).forEach(function (c) { if (cats.indexOf(c) < 0) cats.push(c); }); });
  var chipBox = document.getElementById("chips");
  chipBox.innerHTML = cats.map(function (c) {
    var n = c === "All" ? all.length : c === FAV ? favCount() : all.filter(function (p) { return inCat(p, c); }).length;
    var label = c === FAV ? '<i class="star" aria-hidden="true">&#9733;</i> My Favorites' : esc(c);
    return '<button type="button" class="chip' + (c === "All" ? " on" : "") + (c === FAV ? " chip-fav" : "") + '" data-cat="' + esc(c) + '">' + label + ' <span>' + n + "</span></button>";
  }).join("");
  chipBox.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state.cat = b.getAttribute("data-cat"); state.expanded = false;
    chipBox.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === b); });
    render();
  });
  document.getElementById("search").addEventListener("input", function (e) {
    state.q = e.target.value.trim().toLowerCase(); state.expanded = false; render();
  });
  document.getElementById("more").addEventListener("click", function () {
    state.expanded = !state.expanded; render();
  });

  /* ---------- Gallery render ---------- */
  var grid = document.getElementById("gallery-grid");
  var moreBtn = document.getElementById("more");
  var empty = document.getElementById("empty");

  function card(p) {
    var tags = (p.tags || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    return (
      '<a class="card in" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="--c:' + esc(p.color || "#2b3a67") + '">' +
        '<div class="card-thumb">' + thumb(p) +
          (p.grades ? '<span class="grade">' + esc(p.grades) + "</span>" : "") +
          (catsOf(p).length ? '<span class="cat">' + esc(catsOf(p).join(" · ")) + "</span>" : "") +
          starBtn(p) +
        "</div>" +
        '<div class="card-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="tagline">' + esc(p.tagline) + "</p>" +
          "<p>" + esc(p.desc) + "</p>" +
          '<ul class="tags">' + tags + "</ul>" +
          '<span class="try">Try it &rarr;</span>' +
        "</div>" +
      "</a>"
    );
  }
  var nextCard =
    '<a class="card card-next in" href="#request"><div class="card-next-inner">' +
    '<span class="plus">+</span><h3>Your tool here</h3>' +
    "<p>Have an idea for your classroom? Tell me about it.</p></div></a>";

  /* ---------- Today's Pick ----------
     Picks one older tool (not among the first PAGE cards) so it gets seen again.
     The pick is based on today's date: everyone sees the same tool all day,
     and it changes tomorrow. "Show me another" steps to the next older tool. */
  var pickBox = document.getElementById("pick");
  var pool = all.slice(PAGE);
  var pickIdx = 0;
  if (pool.length) {
    var d = new Date();
    var seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    seed = (seed * 2654435761) >>> 0; // spread neighboring dates apart
    pickIdx = seed % pool.length;
  }
  function renderPick() {
    if (!pickBox) return;
    var show = pool.length && state.cat === "All" && !state.q;
    pickBox.hidden = !show;
    if (!show) return;
    var p = pool[pickIdx];
    pickBox.style.setProperty("--c", p.color || "#2b3a67");
    pickBox.innerHTML =
      '<div class="pick-label">' +
        '<span class="pick-avatar"><img src="assets/avatar/thumbsup.webp" alt="" /></span>' +
        '<div><p class="pick-title">Today\'s Pick</p>' +
        '<p class="pick-note">A tool from the archive you may have missed.</p>' +
        (pool.length > 1 ? '<button type="button" class="pick-next">Show me another &#8635;</button>' : "") +
        "</div>" +
      "</div>" +
      '<a class="pick-card" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
        '<div class="card-thumb pick-thumb">' + thumb(p) +
          (p.grades ? '<span class="grade">' + esc(p.grades) + "</span>" : "") +
          starBtn(p) +
        "</div>" +
        '<div class="pick-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="tagline">' + esc(p.tagline) + "</p>" +
          "<p>" + esc(p.desc) + "</p>" +
          '<span class="try">Try it &rarr;</span>' +
        "</div>" +
      "</a>";
  }
  if (pickBox) pickBox.addEventListener("click", function (e) {
    if (!e.target.closest(".pick-next")) return;
    pickIdx = (pickIdx + 1) % pool.length;
    renderPick();
  });

  function render() {
    renderPick();
    var source = state.cat === FAV ? everything : all;
    var list = source.filter(function (p) {
      if (!inCat(p, state.cat)) return false;
      if (!state.q) return true;
      var hay = [p.title, p.tagline, p.desc, p.grades].concat(catsOf(p)).concat(p.tags || []).join(" ").toLowerCase();
      return hay.indexOf(state.q) >= 0;
    });
    var shown = state.expanded ? list : list.slice(0, PAGE);
    grid.innerHTML = shown.map(card).join("") + (list.length && (state.expanded || list.length <= PAGE) ? nextCard : "");
    empty.hidden = list.length > 0;
    empty.innerHTML = state.cat === FAV && !state.q
      ? "No favorites yet. Tap the &#9734; on any tool to save it here. Favorites stay in this browser."
      : 'No tools match that yet. <a href="#request">Request one?</a>';
    moreBtn.hidden = list.length <= PAGE;
    moreBtn.textContent = state.expanded ? "Show fewer" : "Show all " + list.length + " tools";
  }
  render();

  /* Star clicks: save without opening the card's link */
  function onStar(e) {
    var b = e.target.closest && e.target.closest(".star-btn"); if (!b) return;
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault(); e.stopPropagation();
    var url = b.getAttribute("data-fav");
    toggleFav(url);
    var on = favs.indexOf(url) >= 0;
    document.querySelectorAll('.star-btn[data-fav="' + url.replace(/"/g, '\\"') + '"]').forEach(function (x) {
      x.classList.toggle("on", on); x.setAttribute("aria-pressed", on);
      x.innerHTML = on ? "&#9733;" : "&#9734;";
      x.title = (on ? "Remove from" : "Save to") + " My Favorites";
    });
    var c = chipBox.querySelector('.chip-fav span'); if (c) c.textContent = favCount();
    if (state.cat === FAV) render();
  }
  document.addEventListener("click", onStar, true);
  document.addEventListener("keydown", onStar, true);

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Gentle fade-in ---------- */
  if ("IntersectionObserver" in window) {
    var els = document.querySelectorAll(".step, .about, .request");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
