export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a className="brand" href="/">
            <img src="/icon-256.png" alt="" width="30" height="30" />
            CLASH OF STEEL
          </a>
          <a className="btn small" href="/game/index.html">Play now</a>
        </div>
      </nav>

      <main className="wrap">
        <section className="hero">
          <h1 className="sr-only">Clash of Steel: Arena Duel</h1>
          <img className="hero-logo" src="/logo.png" alt="Clash of Steel: Arena Duel" />
          <p className="tagline">
            A first-person sword-fighting arena. Physics-driven clashes, 900 champions,
            five arenas, and one crown.
          </p>
          <a className="btn" href="/game/index.html">Enter the Arena</a>
          <p className="hint">Runs in your browser • Mouse + keyboard or touch • No install required</p>
        </section>

        <section>
          <h2>What awaits</h2>
          <div className="grid">
            <div className="card"><h3><span className="num">900</span> bosses</h3><p>From Sir Roderic to Vaelen, the Last Titan — a giant final boss waiting at the end of the climb.</p></div>
            <div className="card"><h3><span className="num">5</span> arenas</h3><p>Stone Courtyard, Iron Dungeon, Moonlit Garden, Mountain Keep and Shadow Temple, each with its own atmosphere.</p></div>
            <div className="card"><h3>Physics clashes</h3><p>Blades meet with real collision, sparks, recoil, hit-stop and camera shake. Read the timing, break the guard.</p></div>
            <div className="card"><h3>First &amp; third person</h3><p>Switch view at any time with <kbd>V</kbd> or the on-screen button.</p></div>
            <div className="card"><h3>Training Grounds</h3><p>Practise on straw dummies and sharpen your blade: +2 damage every 4 hits, up to +30.</p></div>
            <div className="card"><h3>Treasure Vault</h3><p>Win a duel and press <kbd>B</kbd> for a timed bonus round — slash golden orbs for an extra life.</p></div>
          </div>
        </section>

        <section>
          <h2>Controls</h2>
          <div className="controls-grid">
            <div className="ctrl"><span>Look</span><span>Move the mouse / arrow keys</span></div>
            <div className="ctrl"><span>Move</span><span><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd></span></div>
            <div className="ctrl"><span>Slash</span><span>Left click</span></div>
            <div className="ctrl"><span>Guard with shield</span><span>Hold right click</span></div>
            <div className="ctrl"><span>Dodge</span><span><kbd>Space</kbd></span></div>
            <div className="ctrl"><span>Lock-on</span><span><kbd>F</kbd></span></div>
            <div className="ctrl"><span>Change view</span><span><kbd>V</kbd> or the button</span></div>
            <div className="ctrl"><span>Training / Bonus</span><span><kbd>T</kbd> / <kbd>B</kbd></span></div>
            <div className="ctrl"><span>Shop</span><span><kbd>H</kbd></span></div>
            <div className="ctrl"><span>Restart / Next boss</span><span><kbd>R</kbd> / <kbd>N</kbd></span></div>
            <div className="ctrl"><span>Performance mode</span><span><kbd>G</kbd></span></div>
            <div className="ctrl"><span>Mobile</span><span>Joystick + drag to look + buttons</span></div>
          </div>
        </section>

        <section>
          <div className="cta-panel">
            <h2>Ready to draw steel?</h2>
            <p>Step into the courtyard. The first champion is waiting.</p>
            <a className="btn" href="/game/index.html">Play Clash of Steel</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Clash of Steel: Arena Duel — a browser sword-fighting prototype. &nbsp;·&nbsp;{' '}
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </>
  );
}
