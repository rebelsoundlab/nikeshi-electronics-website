# NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD

Official corporate demo web portal for **NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD** located at **39 Mile Post, Galgamuwa 60700, Sri Lanka**.

Specialists in:
- High-tensile agricultural electric fencing for elephant and wildlife conflict mitigation
- Solar energizer stations with deep-cycle battery storage
- Commercial & industrial perimeter security fences with alarm loops
- Industrial 3-phase electrical wiring, control panels, and surge protection
- Deep multi-rod earthing arrays for dry-zone high-resistivity soil

---

## Business Information

- **Company Name**: NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD
- **Telephone**: [077 420 0364](tel:+94774200364)
- **WhatsApp**: [+94 77 420 0364](https://wa.me/94774200364)
- **Address**: 39 Mile Post, Galgamuwa 60700, North Western Province, Sri Lanka
- **Google Maps**: [View Directions](https://www.google.com/maps/search/?api=1&query=39+Mile+Post,+Galgamuwa+60700,+Sri+Lanka)
- **Email Status**: Undergoing corporate administrative verification.

---

## Deployment to Netlify

This project is pre-configured for **Netlify** with `netlify.toml` and `public/_redirects`:

### Option A: Connect via GitHub (Recommended)
1. Push this repository to your GitHub account.
2. In Netlify, click **"Add new site"** &rarr; **"Import an existing project"** &rarr; **GitHub**.
3. Select this repository.
4. Netlify will automatically detect the settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. The Single Page Application (SPA) redirect rules in `netlify.toml` and `_redirects` ensure smooth routing across all 5 pages.

### Option B: Netlify Drag & Drop
1. Run `npm install` and `npm run build` locally.
2. Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).

---

## Deployment to GitHub Pages

Because the project is configured with `base: './'` in `vite.config.ts` and uses hash-synced navigation, it runs cleanly on any GitHub Pages repository path (e.g. `https://<username>.github.io/<repo-name>/`).

### Easy GitHub Actions Setup:
1. In your GitHub repository, go to **Settings** &rarr; **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Create `.github/workflows/deploy.yml` or use the standard Static HTML / Vite workflow:
   - Run `npm ci`
   - Run `npm run build`
   - Upload artifact from path `./dist`
   - Deploy with `actions/deploy-pages@v4`

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server (http://localhost:3000)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8 with `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Router**: Lightweight hash-synced routing with dynamic SEO titles

---

## License & Notice
All rights reserved © NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD.
Visual assets are representative demonstrations of installation standards.
