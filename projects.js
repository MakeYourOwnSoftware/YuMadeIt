/*
  HOW TO ADD A PROJECT
  Copy one block, paste it into the list (keep the commas between blocks),
  and change the details.

  Fields:
    title     Project name
    url       Live link
    tagline   One short line
    desc      One or two sentences
    category  One of: "Learning" | "Games" | "Classroom Tools" | "Teacher Prep" | "Languages"
    grades    e.g. "K-2", "3-5", "K-5", "Teachers", "All ages"
    tags      Short labels (also used by the search box)
    color     Card color (hex)
    mark      1 to 3 letters shown on the card when there is no screenshot
    image     Optional. Leave "" and a screenshot of the live site is taken
              automatically. Add your own file (e.g. "assets/projects/ant-town.webp")
              only when you want a nicer, hand-picked view.
    shot      Optional date, e.g. "2026-11-18". After you update a site, change
              this date to get a fresh automatic screenshot.

  Cards appear in the order listed here. Put new projects at the top
  of the gallery list so the newest tools show first.
*/

// Flagship sites shown in their own section at the top
window.FEATURED = [
  {
    title: "Wonder Pond",
    url: "https://wonderpond.github.io/",
    tagline: "Where curiosity comes to play",
    desc: "A free K-5 learning game site with minute-long rounds built for big screens and interactive whiteboards. No ads, sign-ups, or installs.",
    points: ["Games across 13 subjects, from math and reading to coding and Spanish", "Class tools: timer, random picker, scoreboard, group maker, voice meter", "Guided by mascots Edie, Hop, and Skip"],
    grades: "K-5",
    color: "#1FA2B8",
    mark: "WP",
    image: "assets/projects/wonder-pond.webp"
  },
  {
    title: "Pip's AI Lab",
    url: "https://pips-ai-lab.github.io/",
    tagline: "AI literacy for kids",
    desc: "Pip is a robot who is still learning. Students help Pip, play missions, and collect stamps in their AI passport.",
    points: ["Sprout Explorers (K-2): short missions with pictures and read-aloud help", "Trailblazers (3-5): run experiments, test Pip, and think about fairness", "Read-to-me audio, an AI passport, and a Teacher Room"],
    grades: "K-5",
    color: "#6C5CE7",
    mark: "Pip",
    image: "assets/projects/pips-ai-lab.webp"
  }
];

// Gallery
window.PROJECTS = [
  {
    title: "Sunny Side Bakery",
    url: "https://hyeonhoyu.github.io/Sunny-Side-Bakery/",
    tagline: "Run Grandma Rose's bakery for five days",
    desc: "A cozy story game where you keep Grandma Rose's Main Street bakery running while she rests. Bake muffins, donuts, cinnamon rolls, and pies, serve the regulars, and uncover a sweet small-town love story. Two bonus games, Secret Recipe Hunt and Bake Buddies, are included.",
    category: "Games",
    grades: "All ages",
    tags: ["Bakery", "Time management", "Story", "Puzzles", "Merge game"],
    color: "#E8A33D",
    mark: "SSB",
    image: "assets/projects/sunny-side-bakery.webp"
  },
  {
    title: "Slides to Canvas Video Guide",
    url: "https://hyeonhoyu.github.io/Slides-to-Canvas-Video-Guide/",
    tagline: "From slides to Canvas: your presentation video in three steps",
    desc: "A step-by-step guide for students to record a narrated slide presentation with their face on screen, upload it to YouTube as Unlisted, and submit it in Canvas. Includes a link and embed maker, troubleshooting tips, and a final checklist.",
    category: "Teacher Prep",
    grades: "College students",
    tags: ["Video presentation", "Canvas", "YouTube", "PowerPoint", "Recording", "How-to"],
    color: "#C8553D",
    mark: "S2C",
    image: "",
    shot: "2026-11-21"
  },
  {
    title: "Lily Pad Lab",
    url: "https://hyeonhoyu.github.io/Lily-Pad-Lab/",
    tagline: "Snap blocks. Make Lily move.",
    desc: "A Scratch-style block coding site where students snap blocks together to make Lily the frog move, draw, talk, and score. Six guided missions build from a first hop to a catch-and-score game, and projects save in the browser.",
    category: "Learning",
    grades: "K-5",
    tags: ["Coding", "Block coding", "Computer science", "Scratch-style", "Missions"],
    color: "#3E9B5F",
    mark: "LP",
    image: "",
    shot: "2026-11-20"
  },
  {
    title: "CommonRoom",
    url: "https://hyeonhoyu.github.io/CommonRoom/",
    tagline: "A shared classroom on the web",
    desc: "A virtual classroom where students and teachers walk around as avatars, chat, and talk with people nearby by voice. Includes a stage that reaches the whole room, private group rooms, and teacher controls to gather, mute, or lock the class.",
    category: "Classroom Tools",
    grades: "All grades",
    tags: ["Virtual classroom", "Voice chat", "Avatars", "Group rooms", "Online class"],
    color: "#3A6EA5",
    mark: "CR",
    image: "",
    shot: "2026-11-20"
  },
  {
    title: "AI Escape Lab",
    url: "https://hyeonhoyu.github.io/ai-escape-lab/",
    tagline: "An escape-room team challenge about AI in education",
    desc: "Teams pick one of four missions on deepfakes, algorithmic bias, academic integrity, or student data privacy. They make a branching choice, crack locks using real and practice case evidence, and finish with a mission report to teach back to the class.",
    category: "Teacher Prep",
    grades: "College students",
    tags: ["AI literacy", "Escape room", "Media literacy", "Bias", "Privacy", "Academic integrity", "Team activity"],
    color: "#241A5E",
    mark: "AI",
    image: "",
    shot: "2026-11-19"
  },
  {
    title: "Dr. Yu's APA 7 Paper Checker",
    url: "https://hyeonhoyu.github.io/APA-Format-Checker/",
    tagline: "Check your paper before final submission",
    desc: "Upload a .docx or PDF to check APA 7 format on the title page, abstract, body, and references. Each problem shows the page, where it is, and how to fix it in Word or Google Docs. Files stay in your browser.",
    category: "Teacher Prep",
    grades: "College students",
    tags: ["APA 7", "Writing", "Research paper", "Citations", "Formatting"],
    color: "#7A3E9D",
    mark: "APA",
    image: "",
    shot: "2026-11-19"
  },
  {
    title: "Pick a Time",
    url: "https://pick-a-time.github.io/",
    tagline: "Find the time that works for everyone",
    desc: "A Doodle-style scheduling poll. Make one link, share it, and everyone marks the times that work for them in their own time zone, with no sign-in.",
    category: "Classroom Tools",
    grades: "Teachers",
    tags: ["Scheduling", "Meetings", "Poll", "Time zones", "Productivity"],
    color: "#2D7FF9",
    mark: "PaT",
    image: "",
    shot: "2026-11-19-1030"
  },
  {
    title: "DayBrief",
    url: "https://hyeonhoyu.github.io/DayBrief/web/DayBrief.html",
    tagline: "Your day at a glance",
    desc: "A personal daily board for busy teachers. Keep meetings, to-dos with priorities, birthdays and anniversaries, and notes in one place, and see the next 7 days when you start your day.",
    category: "Classroom Tools",
    grades: "Teachers",
    tags: ["Planner", "To-do", "Calendar", "Birthdays", "Productivity"],
    color: "#F28C28",
    mark: "DB",
    image: "",
    shot: "2026-11-18"
  },
  {
    title: "ClassLive",
    url: "https://hyeonhoyu.github.io/ClassLive/",
    tagline: "Live activities for your class",
    desc: "Run a live word cloud, sticky note board, poll, or anonymous Q&A. Students join with a room code or QR code, with no accounts or apps.",
    category: "Classroom Tools",
    grades: "All grades",
    tags: ["Polls", "Word cloud", "Q&A", "Engagement"],
    color: "#E2574C",
    mark: "CL",
    image: "",
    shot: "2026-11-18-1724"
  },
  {
    title: "Classroom Management Studio",
    url: "https://hyeonhoyu.github.io/classroom-management-studio/",
    tagline: "A self-study guide for elementary preservice teachers",
    desc: "Twelve chapters on rules, routines, praise, responding to misbehavior, restorative practices, and working with families, with research-based strategies, sample scripts, and practice scenarios.",
    category: "Teacher Prep",
    grades: "Preservice teachers",
    tags: ["Classroom management", "Student teaching", "Behavior"],
    color: "#4E8F3A",
    mark: "CM",
    image: ""
  },
  {
    title: "Literacy Quest",
    url: "https://literacyquest.github.io/",
    tagline: "Read, discover, create",
    desc: "A K-5 literacy site with 80 original lessons connected to CKLA units, plus a Sound Lab for practicing letter sounds.",
    category: "Learning",
    grades: "K-5",
    tags: ["Literacy", "Reading", "CKLA"],
    color: "#1D6FE0",
    mark: "LQ",
    image: ""
  },
  {
    title: "Pai Thiao: Thai for Bangkok",
    url: "https://iohsk.github.io/Pai-Thiao/",
    tagline: "Practical Thai for a trip to Bangkok",
    desc: "Ten-minute daily Thai lessons that follow a Bangkok trip from the airport to departure, with a pocket phrasebook, slow audio, and a speaking checker. Free in English and Korean.",
    category: "Languages",
    grades: "Adults",
    tags: ["Thai", "Travel", "Phrasebook"],
    color: "#0E5E5B",
    mark: "PT",
    image: ""
  },
  {
    title: "Little Explorers Safari Adventure",
    url: "safari/",
    tagline: "Drive a jeep and find 8 safari animals",
    desc: "A 3D safari where students drive through the savanna, follow a radar, and spot animals with binoculars to fill their field journal. Finding all 8 earns a printable explorer certificate.",
    category: "Games",
    grades: "K-3",
    tags: ["Science", "Animals", "Habitats"],
    color: "#2F7D5B",
    mark: "Saf",
    image: "assets/projects/safari.webp"
  },
  {
    title: "Cosmo's Planet Expedition",
    url: "cosmo/",
    tagline: "Fly the starship Cosmo across the solar system",
    desc: "Pilot a starship from the Sun out to Pluto and land on each planet to open an observation card with real data and facts. Visit all 8 planets to finish the mission.",
    category: "Games",
    grades: "2-5",
    tags: ["Science", "Space", "Solar system"],
    color: "#5A4BD6",
    mark: "Cos",
    image: "assets/projects/cosmo.webp"
  },
  {
    title: "Phonogram Studio",
    url: "https://hyeonhoyu.github.io/Phonogram-Studio/",
    tagline: "Practice phonogram sounds with Frog Baby",
    desc: "Explore and practice phonogram sounds and keywords at an adjustable speed. Teachers can record their own pronunciation.",
    category: "Learning",
    grades: "K-2",
    tags: ["Literacy", "Phonics", "Audio"],
    color: "#5BAA4C",
    mark: "ph",
    image: "assets/projects/phonogram.webp"
  },
  {
    title: "Ant Town",
    url: "https://hyeonhoyu.github.io/Ant-Town/",
    tagline: "Watch a queen start a brand new colony",
    desc: "An interactive ant farm with a live colony count, life cycle guide, tappable body diagrams, and a quiz. Includes teacher resources.",
    category: "Learning",
    grades: "2-4",
    tags: ["Science", "Life cycles", "Simulation"],
    color: "#C9772E",
    mark: "Ant",
    image: "assets/projects/ant-town.webp"
  },
  {
    title: "MCS K-5 Scope & Sequence",
    url: "https://hyeonhoyu.github.io/mcs-k5-scope-sequence/",
    tagline: "What are MCS kids learning?",
    desc: "Pick a grade to see the year in ELA, math, and PLTW side by side, then explore cross-subject unit ideas. Downloadable as Word.",
    category: "Teacher Prep",
    grades: "K-5",
    tags: ["Curriculum", "Unit planning", "Student teaching"],
    color: "#2E9C8F",
    mark: "K-5",
    image: "assets/projects/mcs-k5.webp"
  },
  {
    title: "Group Maker",
    url: "https://hyeonhoyu.github.io/group-maker/",
    tagline: "Groups, timers, stations, and points with Frog Baby",
    desc: "Make groups with a shuffle or spinning wheel, rotate stations, keep score, and set presentation order. Hidden settings let teachers place students.",
    category: "Classroom Tools",
    grades: "Teachers",
    tags: ["Grouping", "Timer", "Classroom management"],
    color: "#3F8F4A",
    mark: "GM",
    image: "assets/projects/group-maker.webp"
  },
  {
    title: "Luli and the Language of Tea",
    url: "https://hyeonhoyu.github.io/Luli-Language-of-Tea/",
    tagline: "Ten teacups. Ten ways to say tea.",
    desc: "Explore how cultures around the world say tea, with original 3D teacups in each country's traditional style. Inspired by the picture book by Andrea Wang.",
    category: "Languages",
    grades: "All ages",
    tags: ["Picture book", "World cultures", "Social studies"],
    color: "#8A6F4E",
    mark: "Tea",
    image: "assets/projects/luli.webp"
  },
  {
    title: "Bubble Cove",
    url: "https://hyeonhoyu.github.io/BubbleCove/",
    tagline: "Trap sea critters in bubbles and clear the cove",
    desc: "A one- or two-player arcade game. Classroom mode adds math, reading, science, and social studies questions, or play arcade only.",
    category: "Games",
    grades: "K-5",
    tags: ["Arcade", "Review game", "Two players"],
    color: "#2F7FD8",
    mark: "BC",
    image: "assets/projects/bubble-cove.webp"
  },
  {
    title: "Whistle",
    url: "https://hyeonhoyu.github.io/whistle-sports-rulebook/",
    tagline: "Rules made easy, explained by a referee cat",
    desc: "Plain-language rules for 49 sports, with diagrams you can tap. Free, with no accounts, ads, or paywalls.",
    category: "Learning",
    grades: "All ages",
    tags: ["PE", "Sports", "Rules"],
    color: "#E0533D",
    mark: "Wh",
    image: "assets/projects/whistle.webp"
  },
  {
    title: "Dal Tokki",
    url: "https://hyeonhoyu.github.io/daltokki/",
    tagline: "Korean for kids, a little each night",
    desc: "Seven monthly units of 10-minute nightly lessons, starting with Hangul. Includes family tasks and printable worksheets. English and Spanish versions.",
    category: "Languages",
    grades: "Kids",
    tags: ["Korean", "Hangul", "Families"],
    color: "#3B4A8C",
    mark: "달",
    image: "assets/projects/daltokki.webp"
  },
  {
    title: "MusicEd Design Studio",
    url: "https://musiced-design-studio.github.io/",
    tagline: "K-6 music pedagogy studio",
    desc: "Preservice teachers pick a grade, explore a concept, and draft a music lesson with guided reflection prompts. Links to a student Rhythm Lab.",
    category: "Teacher Prep",
    grades: "Preservice",
    tags: ["Music", "Lesson planning", "Reflection"],
    color: "#B0457A",
    mark: "ME",
    image: "assets/projects/musiced.webp"
  }
];
