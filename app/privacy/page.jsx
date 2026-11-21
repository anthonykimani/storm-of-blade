export const metadata = {
  title: 'Privacy — Bladeborn',
};

export default function Privacy() {
  return (
    <main className="wrap" style={{ padding: '60px 0 80px', maxWidth: 760 }}>
      <a className="back" href="/" style={{ display: 'inline-block', marginBottom: 24, textDecoration: 'none' }}>
        ← Back to Bladeborn
      </a>
      <h1 style={{ fontSize: 36, margin: '0 0 8px' }}>Privacy Policy</h1>
      <p style={{ color: '#7e8794', fontSize: 13 }}>Last updated: November 14, 2026</p>

      <p>Bladeborn: Arena Duel is a browser game. This policy explains what information the game handles.</p>

      <h2>Information we collect</h2>
      <p><strong>We do not collect personal information.</strong> There are no accounts, analytics, advertising trackers, or third-party tracking scripts in the game.</p>

      <h2>Local storage</h2>
      <p>The game saves progress in your browser&apos;s <strong>localStorage</strong>: gold, owned and equipped swords, player level and XP. This data stays on your device, is not transmitted anywhere, and can be cleared by clearing your browser&apos;s site data.</p>

      <h2>Hosting</h2>
      <p>If you play the game on a hosted website, that host may keep standard server logs (such as IP address and request times) as part of normal web hosting. The game itself does not send that data anywhere.</p>

      <h2>Third-party services</h2>
      <p>The game does not load external libraries, fonts, or advertisements at runtime. All game code and 3D libraries are served from the same website.</p>

      <h2>Children&apos;s privacy</h2>
      <p>The game does not knowingly collect any information from anyone, including children.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the updated version will be posted on this page.</p>

      <h2>Contact</h2>
      <p>For questions about this policy, contact the site owner through the website where you found the game.</p>
    </main>
  );
}
