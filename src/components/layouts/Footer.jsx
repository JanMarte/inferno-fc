import { Link } from 'react-router-dom';
import { club } from '../../data/mockData';
import { Icon } from '../ui/icons';
import Crest from '../ui/Crest';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="brand">
              <Crest className="brand__mark" />
              <span className="brand__text">Inferno<span className="sc">SC</span></span>
            </Link>
            <p className="muted">
              {club.name} — a community-run, non-profit club competing in the {club.league}, {club.division}. {club.tagline}
            </p>
            <div className="socials" style={{ marginTop: '1.2rem' }}>
              <a href={club.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.Instagram /></a>
              <a href={club.socials.x} target="_blank" rel="noreferrer" aria-label="X"><Icon.X /></a>
              <a href={club.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon.Facebook /></a>
            </div>
          </div>

          <div>
            <h5>Club</h5>
            <div className="footer__links">
              <Link to="/roster">Roster</Link>
              <Link to="/standings">Standings</Link>
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div>
            <h5>Matchday</h5>
            <div className="footer__links">
              <Link to="/standings">Fixtures</Link>
              <Link to="/standings">Results</Link>
              <Link to="/faq">Tickets</Link>
              <Link to="/faq">Tryouts</Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} {club.name}. All rights reserved.</span>
          <span>{club.home}</span>
        </div>
      </div>
    </footer>
  );
}
