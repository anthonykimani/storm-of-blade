# Storm of Blade - Next.js (Vercel)

Next.js wrapper for the game. The React app provides the landing page and privacy page; the game itself is served as a static HTML app from `public/game/` (so pointer lock and ES-module import maps work normally).

## Structure
```
app/
  layout.jsx        metadata / global styles
  page.jsx          landing page
  privacy/page.jsx  privacy policy
public/
  icon.svg, icon-256.png
  game/
    index.html      the game (inlined JS)
    three.module.js
    cannon-es.js
    examples/jsm/controls/PointerLockControls.js
    manifest.webmanifest
```

## Run locally
Requires **Node.js 18.17+**.

```bash
cd vercel-app
npm install
npm run dev
```

- Landing: http://localhost:3000
- Game: http://localhost:3000/game/index.html

## Build
```bash
npm run build
npm start
```

## Deploy to Vercel
### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts (framework: Next.js). For production:
```bash
vercel --prod
```

### Option B — GitHub + Vercel dashboard (recommended)
1. Create a Git repo and push this `vercel-app` folder.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`, output `.next`.
4. Deploy.

## Notes
- The game is **not** rewritten in React; only the site shell is Next.js. This keeps the physics/WebGL code intact and avoids iframe pointer-lock restrictions.
- All libraries are served locally from `public/game/`, so no CDN dependency.
- Progress saves in `localStorage` per browser.
- For a custom domain, add it in Vercel → Settings → Domains.
