import { useState } from 'react';
import { teamRoster, POSITIONS } from '../data/mockData';
import PlayerCard from '../components/ui/PlayerCard';
import PlayerAvatar from '../components/ui/PlayerAvatar';
import PageHero from '../components/ui/PageHero';
import { Icon } from '../components/ui/icons';

export default function Roster() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const players = filter === 'All'
    ? teamRoster
    : teamRoster.filter(p => p.position === filter);

  return (
    <>
      <PageHero
        eyebrow="2025–26 First Team"
        title="The"
        spark="Squad"
        sub="Local talent, college standouts and internationals — eight players who pull on the badge and carry the fire for Eastern Iowa. Tap any player for the full profile."
      />

      <section className="section--tight">
        <div className="wrap">
          <div className="roster-filters">
            {POSITIONS.map(pos => (
              <button key={pos}
                className={`chip ${filter === pos ? 'active' : ''}`}
                onClick={() => setFilter(pos)}>
                {pos}
              </button>
            ))}
          </div>

          <div className="grid grid--4">
            {players.map(p => (
              <PlayerCard key={p.id} player={p} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      {active && <PlayerModal player={active} onClose={() => setActive(null)} />}
    </>
  );
}

function PlayerModal({ player, onClose }) {
  const initials = `${player.first[0]}${player.last[0]}`;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${player.name} profile`}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__head">
          <div className="modal__media">
            <PlayerAvatar number={player.number} position={player.position} initials={initials} />
          </div>
          <div className="modal__intro">
            <button className="modal__close" onClick={onClose} aria-label="Close"><Icon.Close style={{ width: 20, height: 20 }} /></button>
            <span className="modal__num">#{player.number}</span>
            <h3 className="modal__name">{player.name}</h3>
            <span className="modal__role">{player.position} · {player.hometown}</span>
            <div className="modal__statline">
              <div><b>{player.apps}</b><span>Apps</span></div>
              <div><b>{player.goals}</b><span>Goals</span></div>
              <div><b>{player.assists}</b><span>Assists</span></div>
              <div><b>{player.number}</b><span>Number</span></div>
            </div>
          </div>
        </div>
        <div className="modal__body">
          <p>{player.bio}</p>
          <p style={{ color: 'var(--smoke)', fontFamily: 'var(--cond)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: '1.1rem' }}>
            Foot: <strong style={{ color: 'var(--bone)' }}>{player.foot}</strong> &nbsp;·&nbsp;
            Height: <strong style={{ color: 'var(--bone)' }}>{player.height}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
