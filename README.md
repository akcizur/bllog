# bllog

Personal monochrome Astro + Vite blog for **blog.ruzickajakub.cz** — designer, code dev, audio sympatizant.

Stack:
- Astro 7 + Vite
- Markdown content collections
- strict black, white and neutral greys
- Google Sans + Google Sans Text typography
- restrained glass blur
- light/dark mode
- RSS + sitemap + SEO metadata
- GitHub Pages auto deploy on every push to main

Run locally:

    bun i
    bun run dev

Build:

    bun run build

Local development:

    http://localhost:4321/

Add posts under src/content/blog/. The filename becomes the article slug.

Composition rules:
- desktop navigation uses a true three-column grid, so the center nav stays mathematically centered;
- hero content is centered with a capped measure;
- article copy uses a fixed reading measure and balanced side rail;
- glass blur is restricted to navigation and transient surfaces;
- imagery is forced to grayscale;
- typography is system-first with native kerning, ligatures and no synthetic styles.

GitHub Pages:
The workflow runs on main and deploys the static Astro output to GitHub Pages.

Custom domain:
The production domain is `https://blog.ruzickajakub.cz/`, with `public/CNAME` checked into the repository. The Astro base is `/`.