/**
 * Site-wide constants. Edit these once; they propagate everywhere.
 */

export const SITE_URL = 'https://gaspard-loeillot.github.io';

export const SITE_TITLE = 'Gaspard Loeillot';
export const SITE_DESCRIPTION =
  'Essays, podcasts, and projects by Gaspard Loeillot — founding engineer at Laurence (YC W26).';

export const AUTHOR = {
  name: 'Gaspard Loeillot',
  role: 'Founding engineer, Laurence (YC W26)',
  location: 'New York',
  email: 'hello@example.com', // TODO: replace with real email
};

export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/gaspard-loeillot/', // TODO: verify
  twitter: 'https://twitter.com/gaspardloeillot', // TODO: verify or remove
  github: 'https://github.com/gaspard-loeillot', // TODO: verify
};

export const NAV_ITEMS = [
  { label: 'Essays', href: '/essays/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Podcasts', href: '/podcasts/' },
  { label: 'Quotes', href: '/quotes/' },
  { label: 'CV', href: '/cv.pdf' },
  { label: 'About', href: '/about/' },
] as const;
