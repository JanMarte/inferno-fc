import { upcomingMatches } from '../data/mockData';
import MatchCard from '../components/ui/MatchCard';

export default function Schedule() {
  return (
    <div>
      <h1 className="page-title">Upcoming Matches</h1>
      <div className="grid">
        {upcomingMatches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}