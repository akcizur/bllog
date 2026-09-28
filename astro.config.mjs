import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = 'akcizur', repo = 'bllog'] = repository.split('/');
const explicitSite = process.env.SITE;
const explicitBase = process.env.BASE;
const isUserSite = repo === `${owner}.github.io`;
const isCustomDomain = Boolean(explicitSite && !explicitSite.includes('github.io'));
export default defineConfig({
  site: explicitSite ?? `https://${owner}.github.io`,
  base: explicitBase ?? (isUserSite || isCustomDomain ? '/' : `/${repo}`),
  trailingSlash:'always',
  integrations:[sitemap()],
};