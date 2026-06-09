import PlayerAvatar from './PlayerAvatar';

export default function PlayerCard({ player, onOpen }) {
  const initials = `${player.first[0]}${player.last[0]}`;
  return (
    <button className="player" onClick={() => onOpen(player)} aria-label={`View ${player.name} profile`}>
      <div className="player__media">
        <PlayerAvatar number={player.number} position={player.position} initials={initials} />
        <span className="player__num">{player.number}</span>
        <span className="player__pos">{player.position}</span>
      </div>
      <div className="player__body">
        <div className="player__name">{player.name}</div>
        <div className="player__role">{player.hometown}</div>
        <p className="player__bio">{player.bio.slice(0, 96)}…</p>
        <div className="player__stats">
          <div className="player__stat"><b>{player.apps}</b><span>Apps</span></div>
          <div className="player__stat"><b>{player.goals}</b><span>Goals</span></div>
          <div className="player__stat"><b>{player.assists}</b><span>Assists</span></div>
        </div>
      </div>
    </button>
  );
}
