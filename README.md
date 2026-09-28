# bllog

Monochrome Astro + Vite editorial blog template, adapted from akcizur/sf3.

Stack:
- Astro 7 + Vite
- Markdown content collections
- strict black, white and neutral greys
- system-first typography without external font services
- restrained glass blur
- light/dark mode
- RSS + sitemap + SEO metadata
- GitHub Pages auto deploy on every push to main

Run locally:

    bun i
    bun run dev

Build:

    bun run build

For this repository the local path is:

    http://localhost:4321/bllog/

Add posts under src/content/blog/. The filename becomes the article slug.

Composition rules:
- desktop navigation uses a true three-column grid, so the center nav stays mathematically centered;
- hero content is centered with a capped measure;
- article copy uses a fixed reading measure and balanced side rail;
- glass blur is restricted to navigation and transient surfaces;
- imagery is forced to grayscale;
- typography is system-first with native kerning, ligatures and no synthetic styles.

GitHub Pages:
The workflow runs on main and deploys the static Astro output. The Astro config derives the /bllog/ base automatically from GITHUB_REPOSITORY.

Custom domain:
Set SITE to the domain and BASE to /. Add public/CNAME when needed.