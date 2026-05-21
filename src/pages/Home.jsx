import { Link } from 'react-router-dom';
import { upcomingMatches } from '../data/mockData';
import MatchCard from '../components/ui/MatchCard';

export default function Home() {
  const nextMatch = upcomingMatches[0];

  return (
    <div>
      <div className="hero">
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>WELCOME TO INFERNO SC</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>A new era of soccer in Eastern Iowa.</p>
        <Link to="/schedule" className="btn">View Schedule</Link>
      </div>

      <h2 className="page-title">Next Match</h2>
      <div style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <MatchCard match={nextMatch} />
      </div>
    </div>
  );
}