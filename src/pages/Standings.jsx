import { club, upcomingMatches, recentResults } from '../data/mockData';
import StandingsTable from '../components/ui/StandingsTable';
import MatchCard from '../components/ui/MatchCard';
import PageHero from '../components/ui/PageHero';

export default function Standings() {
  return (
    <>
      <PageHero
        eyebrow={`${club.league} · ${club.division}`}
        title="The"
        spark="Table"
        sub={`Where the Inferno stand in ${club.division}, plus recent results and upcoming fixtures. Figures track the official MWPL league table.`}
      />

      <section className="section--tight">
        <div className="wrap">
          <StandingsTable />
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__left">
              <span className="eyebrow">Form</span>
              <h2 className="section-title">Recent <span className="spark">results</span></h2>
            </div>
          </div>
          <div className="grid grid--3">
            {recentResults.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__left">
              <span className="eyebrow">Fixtures</span>
              <h2 className="section-title">Upcoming <span className="spark">matches</span></h2>
            </div>
          </div>
          <div className="grid grid--4">
            {upcomingMatches.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </section>
    </>
  );
}
