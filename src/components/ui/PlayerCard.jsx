export default function PlayerCard({ player }) {
  return (
    <div className="card">
      {/* Placeholder for player image, you can drop actual images in assets later */}
      <div style={{ height: '200px', backgroundColor: '#333', borderRadius: '4px', marginBottom: '1rem' }}></div>
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p style={{ color: 'var(--primary-red)', fontWeight: 'bold', marginTop: '0.5rem' }}>#{player.number}</p>
    </div>
  );
}