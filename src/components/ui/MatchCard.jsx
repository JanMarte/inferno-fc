export default function MatchCard({ match }) {
  return (
    <div className="card" style={{ borderLeft: match.location === 'Home' ? '4px solid var(--primary-red)' : '4px solid #555' }}>
      <h3>vs {match.opponent}</h3>
      <p><strong>Date:</strong> {match.date}</p>
      <p><strong>Time:</strong> {match.time}</p>
      <p><strong>Location:</strong> {match.location}</p>
    </div>
  );
}