import { standings } from '../../data/mockData';
import Crest from './Crest';

export default function StandingsTable({ compact = false }) {
  return (
    <>
      <div className="table-wrap">
        <table className="standings">
          <thead>
            <tr>
              <th>#</th>
              <th className="tl">Club</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th className="hide-sm">GF</th>
              <th className="hide-sm">GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((r) => {
              const gd = r.f - r.a;
              return (
                <tr key={r.team} className={r.isTeam ? 'is-team' : ''}>
                  <td><span className="pos">{r.pos}</span></td>
                  <td>
                    <span className="club">
                      {r.isTeam
                        ? <Crest className="crest" />
                        : <span className="crest" style={{ background: '#241914', display: 'inline-block' }} />}
                      <span className="club__name">{r.team}</span>
                    </span>
                  </td>
                  <td>{r.p}</td>
                  <td>{r.w}</td>
                  <td>{r.d}</td>
                  <td>{r.l}</td>
                  <td className="hide-sm">{r.f}</td>
                  <td className="hide-sm">{r.a}</td>
                  <td className={gd >= 0 ? 'gd-pos' : 'gd-neg'}>{gd >= 0 ? `+${gd}` : gd}</td>
                  <td><span className="pts">{r.pts}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!compact && (
        <div className="legend">
          <span><i style={{ background: 'var(--ember)' }} /> Cedar Rapids Inferno</span>
          <span>P · Played &nbsp; GD · Goal difference &nbsp; Pts · Points</span>
        </div>
      )}
    </>
  );
}
