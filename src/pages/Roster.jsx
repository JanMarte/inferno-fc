import { teamRoster } from '../data/mockData';
import PlayerCard from '../components/ui/PlayerCard';

export default function Roster() {
  return (
    <div>
      <h1 className="page-title">First Team Roster</h1>
      <div className="grid">
        {teamRoster.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}