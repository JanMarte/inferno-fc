import { Link } from 'react-router-dom';
import { club, timeline, values } from '../data/mockData';
import PageHero from '../components/ui/PageHero';
import { Icon } from '../components/ui/icons';

const ICONS = { flame: Icon.Flame, globe: Icon.Globe, trophy: Icon.Trophy };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A club"
        spark="forged"
        sub={`Founded in ${club.founded}, ${club.name} was built to bring competitive soccer back to Eastern Iowa — and to honor the memory that started it all.`}
      />

      {/* story + timeline */}
      <section className="section--tight">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <span className="eyebrow">From a spark to a title</span>
              <h2 className="section-title" style={{ margin: '.9rem 0 1.1rem' }}>
                Built on local grit
              </h2>
              <p className="lede">
                The Inferno began as a passion project — a non-profit, community-run club where no one plays for a paycheck. What started with a single open tryout has grown into a founding member of the {club.league} and, in 2024, a conference champion.
              </p>
              <p style={{ color: 'var(--ash)', marginTop: '1rem' }}>
                Our locker room is a melting pot: high school standouts and college players from across the area line up alongside internationals who found a home in Cedar Rapids. The common thread is the badge — and a refusal to take a step backward. As the club grows, we're putting down deeper roots across Eastern Iowa, from our home at Kingston Stadium toward a stronger presence in Marion.
              </p>
              <Link to="/roster" className="btn btn--fire" style={{ marginTop: '1.6rem' }}>
                Meet the squad <Icon.Arrow />
              </Link>
            </div>

            <div className="panel" style={{ padding: '1.8rem' }}>
              <span className="eyebrow">Milestones</span>
              <div className="timeline" style={{ marginTop: '1.4rem' }}>
                {timeline.map(t => (
                  <div className="tl-item" key={t.year}>
                    <div className="tl-year">{t.year}</div>
                    <div className="tl-title">{t.title}</div>
                    <div className="tl-text">{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__left">
              <span className="eyebrow">What we're about</span>
              <h2 className="section-title">The Inferno <span className="spark">way</span></h2>
            </div>
          </div>
          <div className="grid grid--3">
            {values.map(v => {
              const Ico = ICONS[v.icon];
              return (
                <div className="panel value-card" key={v.title}>
                  <Ico className="vc-ico" />
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
