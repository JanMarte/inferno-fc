import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Inferno<span>SC</span></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/roster">Roster</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/history">History</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
}