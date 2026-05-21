export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Inferno SC. All rights reserved.</p>
      <p style={{ marginTop: '0.5rem' }}>Follow us on Facebook and X.</p>
    </footer>
  );
}