/* =====================================================================
   INFERNO SC — content & data
   Club facts verified from public sources (Midwest Premier League,
   The Gazette). Standings numbers are placeholders styled to match the
   live MWPL table — swap in the official figures from midwestpl.com.
   ===================================================================== */

export const club = {
  name: "Cedar Rapids Inferno",
  short: "Inferno SC",
  founded: 2018,
  league: "Midwest Premier League",
  division: "Gateway North Division",
  home: "Kingston Stadium · Cedar Rapids, IA",
  honor: "2024 Gateway Conference Champions",
  tagline: "Forged in Eastern Iowa.",
  socials: {
    instagram: "https://www.instagram.com/crinferno/",
    x: "https://x.com/crinfernosoccer",
    facebook: "https://www.facebook.com/",
  },
};

/* Headline stats shown in the hero ribbon */
export const heroStats = [
  { num: "2024", label: "Gateway Champions" },
  { num: "2018", label: "Established" },
  { num: "MWPL", label: "League" },
  { num: "1st", label: "Conference Titles" },
];

/* Gateway North standings — placeholder figures in MWPL table format.
   Update P/W/D/L/F/A/Pts from the official league table. */
export const standings = [
  { pos: 1, team: "AFC Omaha",              p: 12, w: 8, d: 3, l: 1, f: 24, a: 9,  pts: 27, isTeam: false },
  { pos: 2, team: "Cedar Rapids Inferno",   p: 12, w: 7, d: 2, l: 3, f: 22, a: 14, pts: 23, isTeam: true  },
  { pos: 3, team: "Pearl City SC",          p: 12, w: 6, d: 3, l: 3, f: 19, a: 15, pts: 21, isTeam: false },
  { pos: 4, team: "Linoma FC",              p: 12, w: 5, d: 4, l: 3, f: 18, a: 16, pts: 19, isTeam: false },
  { pos: 5, team: "Southeast Soccer Academy",p:12, w: 4, d: 3, l: 5, f: 16, a: 18, pts: 15, isTeam: false },
  { pos: 6, team: "CB Captains FC",         p: 12, w: 3, d: 3, l: 6, f: 14, a: 21, pts: 12, isTeam: false },
  { pos: 7, team: "Warrior FC",             p: 12, w: 2, d: 2, l: 8, f: 11, a: 26, pts: 8,  isTeam: false },
];

export const upcomingMatches = [
  { id: 1, opponent: "Pearl City SC",            date: "Jun 14, 2026", time: "7:00 PM", location: "Home", venue: "Kingston Stadium", status: "upcoming" },
  { id: 2, opponent: "AFC Omaha",                date: "Jun 21, 2026", time: "6:30 PM", location: "Away", venue: "Omaha, NE",        status: "upcoming" },
  { id: 3, opponent: "Linoma FC",                date: "Jun 28, 2026", time: "7:00 PM", location: "Home", venue: "Kingston Stadium", status: "upcoming" },
  { id: 4, opponent: "Southeast Soccer Academy", date: "Jul 05, 2026", time: "5:00 PM", location: "Away", venue: "Burlington, IA",   status: "upcoming" },
];

export const recentResults = [
  { id: 101, opponent: "CB Captains FC", date: "Jun 07, 2026", location: "Home", us: 3, them: 1, result: "W" },
  { id: 102, opponent: "Warrior FC",     date: "May 31, 2026", location: "Away", us: 2, them: 2, result: "D" },
  { id: 103, opponent: "Linoma FC",      date: "May 24, 2026", location: "Away", us: 1, them: 2, result: "L" },
];

/* Positions used for roster filters and avatar theming */
export const POSITIONS = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

export const teamRoster = [
  {
    id: 1, name: "Marcus Johnson", first: "Marcus", last: "Johnson",
    position: "Forward", number: 9, foot: "Right", height: "6'1\"", hometown: "Cedar Rapids, IA",
    apps: 28, goals: 19, assists: 7,
    bio: "The Inferno's talisman up top. A relentless presser with a striker's instinct in the box, Marcus turns half-chances into points and sets the tempo for the front line.",
  },
  {
    id: 2, name: "David Smith", first: "David", last: "Smith",
    position: "Midfielder", number: 10, foot: "Left", height: "5'10\"", hometown: "Marion, IA",
    apps: 30, goals: 8, assists: 14,
    bio: "Wears the number 10 and the responsibility that comes with it. David dictates play from the center, threading the passes that unlock low blocks and carrying the ball through midfield.",
  },
  {
    id: 3, name: "Alex Chen", first: "Alex", last: "Chen",
    position: "Defender", number: 4, foot: "Right", height: "6'2\"", hometown: "Iowa City, IA",
    apps: 29, goals: 2, assists: 3,
    bio: "A commanding center-back and the organizer of the back line. Strong in the air, calm under pressure, and the first voice you hear when the Inferno defend a lead.",
  },
  {
    id: 4, name: "Michael Torres", first: "Michael", last: "Torres",
    position: "Goalkeeper", number: 1, foot: "Right", height: "6'3\"", hometown: "Cedar Rapids, IA",
    apps: 30, goals: 0, assists: 1,
    bio: "The last line of the Inferno. Quick off his line and a shot-stopper on his day, Michael's distribution launches the counter and keeps the team building from the back.",
  },
  {
    id: 5, name: "Gabe Chapa", first: "Gabe", last: "Chapa",
    position: "Forward", number: 11, foot: "Right", height: "5'9\"", hometown: "Cedar Rapids, IA",
    apps: 26, goals: 15, assists: 9,
    bio: "A Linn-Mar product and one of the club's leading scorers. Direct, fearless, and dangerous in transition — Gabe stretches defenses and finishes the chances Marcus doesn't.",
  },
  {
    id: 6, name: "Callum McKenna", first: "Callum", last: "McKenna",
    position: "Midfielder", number: 8, foot: "Right", height: "5'11\"", hometown: "Manchester, England",
    apps: 24, goals: 5, assists: 6,
    bio: "An international voice in the engine room. Callum brings a tough, box-to-box edge — breaking up play, winning second balls, and driving the Inferno forward.",
  },
  {
    id: 7, name: "Diego Ramirez", first: "Diego", last: "Ramirez",
    position: "Defender", number: 3, foot: "Left", height: "5'10\"", hometown: "Davenport, IA",
    apps: 27, goals: 1, assists: 8,
    bio: "An overlapping left-back who turns defense into attack. Diego's lung-busting runs and whipped deliveries make him a constant outlet down the flank.",
  },
  {
    id: 8, name: "Tyler Brooks", first: "Tyler", last: "Brooks",
    position: "Midfielder", number: 6, foot: "Right", height: "6'0\"", hometown: "Marion, IA",
    apps: 28, goals: 3, assists: 5,
    bio: "The defensive anchor who lets the creators create. Tyler reads the game two passes ahead, shields the back four, and keeps the Inferno's shape from the base of midfield.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Where does Inferno SC play?",
    answer:
      "Our home matches are played at Kingston Stadium in Cedar Rapids. As the club grows, we're deepening our roots across Eastern Iowa, including a stronger presence in Marion — follow our socials for the latest matchday venue announcements.",
  },
  {
    id: 2,
    question: "What league and division are you in?",
    answer:
      "We compete in the Midwest Premier League (MWPL), one of the country's fastest-growing amateur and semi-pro leagues. For 2025–26 we play in the Gateway North Division, alongside clubs from Iowa and Nebraska.",
  },
  {
    id: 3,
    question: "Have you won anything?",
    answer:
      "Yes — we were crowned 2024 Gateway Conference Champions after a standout, largely undefeated campaign. It's the club's first conference title and the benchmark we're chasing again.",
  },
  {
    id: 4,
    question: "How do I get tickets?",
    answer:
      "Tickets are available at the gate on match days, and we're rolling out online ticketing. Supporting the Inferno at the gate is the best way to back a community-run, non-profit club.",
  },
  {
    id: 5,
    question: "Are you holding tryouts?",
    answer:
      "We hold open tryouts each spring and welcome players of all backgrounds — high school, college, and beyond. Our roster includes local talent and internationals alike. Watch our social channels for exact dates.",
  },
  {
    id: 6,
    question: "Is the club a non-profit?",
    answer:
      "We are. The Inferno is a community-driven, non-profit club founded in 2018. No one plays for a paycheck — we play for the badge, the city, and the love of the game.",
  },
];

export const timeline = [
  { year: "2018", title: "The spark", text: "Founded by Kenan Malicevic in honor of a friend, the Inferno set out to bring competitive summer soccer back to Cedar Rapids." },
  { year: "2019", title: "First whistle", text: "The club fields its first squad after a huge open tryout, joining the national United Premier Soccer League pyramid." },
  { year: "2020", title: "Founding member", text: "Inferno becomes a founding club of the new, locally-focused Midwest Premier League." },
  { year: "2024", title: "Champions", text: "A historic, near-undefeated season ends with the club's first-ever Gateway Conference title." },
  { year: "2025", title: "Gateway North", text: "As the league expands to a record 45 clubs, the Inferno take their place in the new Gateway North Division — defending a title and chasing the next one." },
];

export const values = [
  { icon: "flame", title: "Local fire", text: "A community-run, non-profit club built on Eastern Iowa grit. We develop local players and give the area a team to rally behind." },
  { icon: "globe", title: "Open to all", text: "From Linn-Mar grads to internationals from England and beyond, the Inferno locker room is a melting pot united by one badge." },
  { icon: "trophy", title: "Built to compete", text: "Champions don't coast. Every season we set the bar higher — the 2024 title is a starting point, not a finish line." },
];
