/* On-brand SVG avatar used as a placeholder until real player photos are
   added. Themed per position with the forge palette. Drop a real image in
   /src/assets and swap the <svg> for an <img> when photos are ready. */

const POS_THEME = {
  Goalkeeper: { a: "#2b6cb0", b: "#1a3a5c" },
  Defender:   { a: "#ff8a1e", b: "#7a2d0a" },
  Midfielder: { a: "#ff5715", b: "#5c1208" },
  Forward:    { a: "#e5141d", b: "#3d0808" },
};

export default function PlayerAvatar({ number = 0, position = "Forward", initials = "" }) {
  const theme = POS_THEME[position] || POS_THEME.Forward;
  const gid = `pa-${position}-${number}`;
  return (
    <svg viewBox="0 0 320 400" preserveAspectRatio="xMidYMid slice" role="img"
         aria-label={`${position} jersey number ${number}`}>
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241914" />
          <stop offset="100%" stopColor="#0b0807" />
        </linearGradient>
        <linearGradient id={`${gid}-j`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.a} />
          <stop offset="100%" stopColor={theme.b} />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff5715" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#ff5715" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="320" height="400" fill={`url(#${gid}-bg)`} />
      <rect width="320" height="400" fill={`url(#${gid}-glow)`} />

      {/* flame silhouette behind the figure */}
      <path
        d="M160 70c22 28 8 48 22 70 9 14 30 18 30 46 0 36-37 64-82 64s-82-28-82-64c0-22 14-34 26-48 0 18 12 26 22 26-14-26 2-44 14-60 6 14 16 16 22 28 6-30-8-46 6-62z"
        fill="#ff5715" opacity="0.10" transform="translate(0,8)"
      />

      {/* shoulders / jersey */}
      <path
        d="M70 400v-92c0-44 40-66 90-66s90 22 90 66v92z"
        fill={`url(#${gid}-j)`}
      />
      {/* collar */}
      <path d="M132 250c8 14 48 14 56 0l-10-14h-36z" fill="#0b0807" opacity="0.55" />
      {/* head */}
      <circle cx="160" cy="198" r="48" fill="#1a1310" />
      <circle cx="160" cy="198" r="48" fill="none" stroke={theme.a} strokeWidth="2" opacity="0.5" />

      {/* initials on the chest */}
      <text x="160" y="350" textAnchor="middle"
            fontFamily="'Barlow Condensed', sans-serif" fontWeight="700"
            fontSize="34" letterSpacing="2" fill="#fff" opacity="0.92">
        {initials}
      </text>
    </svg>
  );
}
