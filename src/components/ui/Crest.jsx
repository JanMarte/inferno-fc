/* Inferno SC crest — a flame inside a shield. Used in the navbar, footer
   and as the standings crest. Pure SVG so it scales crisply anywhere. */

export default function Crest({ className, title = "Inferno SC crest" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crest-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffc24b" />
          <stop offset="45%" stopColor="#ff5715" />
          <stop offset="100%" stopColor="#e5141d" />
        </linearGradient>
        <linearGradient id="crest-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241914" />
          <stop offset="100%" stopColor="#0b0807" />
        </linearGradient>
      </defs>
      {/* shield */}
      <path d="M32 3 58 11v22c0 16-12 25-26 28C18 58 6 49 6 33V11z"
            fill="url(#crest-shield)" stroke="#ff5715" strokeWidth="2.5" />
      {/* flame */}
      <path d="M32 16c3 7 1 11 5 16 2.5 3.2 7 4 7 11 0 8-5.6 12-12 12s-12-4-12-12c0-5 3-7.5 6-10.5 0 3.6 2.6 5.4 4.6 5.4-3-5.6.4-9.6 2.6-13 1.2 3 3 3.6 4.6 6.4 1.2-6.6-1.6-10.4 0-15.7z"
            fill="url(#crest-flame)" />
    </svg>
  );
}
