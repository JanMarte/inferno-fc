import { club } from '../../data/mockData';
import { Icon } from './icons';

export default function MatchCard({ match }) {
  const isResult = match.result != null;
  const isHome = match.location === 'Home';
  const home = isHome ? club.short : match.opponent;
  const away = isHome ? match.opponent : club.short;

  return (
    <div className="match">
      <span className={`match__tag ${isHome ? 'match__tag--home' : 'match__tag--away'}`}>
        {isHome ? 'Home' : 'Away'}
      </span>

      <span className="match__date">{match.date}</span>

      <div className="match__fixture">
        <span className={`match__side ${isHome ? 'is-us' : ''}`}>{home}</span>
        <span className="match__vs">vs</span>
        <span className={`match__side ${!isHome ? 'is-us' : ''}`}>{away}</span>
      </div>

      {isResult ? (
        <div className="match__score">
          {isHome ? `${match.us}–${match.them}` : `${match.them}–${match.us}`}
          <span className={`res res--${match.result.toLowerCase()}`}>
            {match.result === 'W' ? 'Win' : match.result === 'D' ? 'Draw' : 'Loss'}
          </span>
        </div>
      ) : (
        <div className="match__meta">
          <span><Icon.Clock /> {match.time}</span>
          <span><Icon.Pin /> {match.venue}</span>
        </div>
      )}
    </div>
  );
}
