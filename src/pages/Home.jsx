import { Link } from 'react-router-dom';
import { club, heroStats, upcomingMatches, standings } from '../data/mockData';
import MatchCard from '../components/ui/MatchCard';
import StandingsTable from '../components/ui/StandingsTable';
import { Icon } from '../components/ui/icons';

// pre-computed ember particles for the hero
const EMBERS = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 7) % 100,
  delay: (i % 13) * 0.7,
  dur: 6 + (i % 6),
  size: 3 + (i % 4),
  drift: ((i % 5) - 2) * 30,
}));

export default function Home() {
  const teamRow = standings.find(s => s.isTeam);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__embers" aria-hidden="true">
          {EMBERS.map((e, i) => (
            <span key={i} className="ember" style={{
              left: `${e.left}%`,
              width: `${e.size}px`, height: `${e.size}px`,
              animationDuration: `${e.dur}s`,
              animationDelay: `${e.delay}s`,
              '--drift': `${e.drift}px`,
            }} />
          ))}
        </div>

        <div className="wrap">
          <span className="hero__badge"><Icon.Trophy style={{ width: 15, height: 15 }} /> {club.honor}</span>
          <h1 className="hero__title">
            FORGED IN<br /><span className="line2">EASTERN IOWA</span>
          </h1>
          <p className="hero__sub">
            {club.name} — semi-pro soccer built on local grit and an open door. Competing in the {club.league}, {club.division}.
          </p>
          <div className="hero__cta">
            <Link to="/standings" className="btn btn--fire">See the table <Icon.Arrow /></Link>
            <Link to="/roster" className="btn btn--ghost">Meet the squad</Link>
          </div>

          <div className="hero__stats">
            {heroStats.map((s) => (
              <div className="hstat" key={s.label}>
                <div className="hstat__num">{s.num}</div>
                <div className="hstat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NEXT MATCHES ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__left">
              <span className="eyebrow">Fixtures</span>
              <h2 className="section-title">Next up <span className="spark">on the pitch</span></h2>
            </div>
            <Link to="/standings" className="btn btn--ghost">Full schedule <Icon.Arrow /></Link>
          </div>
          <div className="grid grid--4">
            {upcomingMatches.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </section>

      {/* ---------------- STANDINGS SNAPSHOT ---------------- */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__left">
              <span className="eyebrow">{club.division}</span>
              <h2 className="section-title">
                Sitting <span className="spark">{ordinal(teamRow.pos)}</span> in the table
              </h2>
              <p className="lede" style={{ marginTop: '.9rem' }}>
                {club.short} have {teamRow.pts} points from {teamRow.p} matches in the {club.league} this season — chasing another Gateway crown.
              </p>
            </div>
            <Link to="/standings" className="btn btn--fire">Full standings <Icon.Arrow /></Link>
          </div>
          <StandingsTable />
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div className="cta-band__bg" />
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Join the fire</span>
            <h2 className="section-title" style={{ margin: '.8rem 0 1rem' }}>
              Back the <span className="spark">Inferno</span>
            </h2>
            <p className="lede" style={{ margin: '0 auto 1.6rem' }}>
              Open tryouts every spring, home matches all summer, and a non-profit club that lives or dies by its community. Pull up a seat at Kingston Stadium.
            </p>
            <div style={{ display: 'flex', gap: '.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/faq" className="btn btn--fire">Tickets &amp; tryouts <Icon.Arrow /></Link>
              <Link to="/about" className="btn btn--ghost">Our story</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
