type SiteConfig = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  logo?: string;
  ogImage: string;
  locale: string;
  twitter: {
    site: string;
  };
};

type Link = {
  text: string;
  href: string;
};

type Action = {
  href: string;
  text: string;
  icon?: string;
};

type FooterLinkGroup = {
  title: string;
  links: Link[];
};

type SocialLink = {
  ariaLabel: string;
  icon: string;
  href: string;
};

type NavigationConfig = {
  header: {
    links: Link[];
    actions: Action[];
  };
  footer: {
    links: FooterLinkGroup[];
    secondaryLinks: Link[];
    socialLinks: SocialLink[];
    contactDetails: {
      address: string;
      addressLink: string;
      email: string;
    };
    footNote: string;
  };
};

export const SITE = (): SiteConfig => {
  return {
    title: 'Clement - Tu vivienda en Madrid',
    description: 'Tu vivienda en Madrid',
    author: 'Clement',
    siteUrl: 'https://clement.es/',
    ogImage: '/src/assets/images/og-image.jpg', // Needs to be an absolute path /src/...
    locale: 'es_ES',
    twitter: { site: '@clement' },
  };
};

export const NAVIGATION = (): NavigationConfig => ({
  header: {
    links: [
      { text: 'Inicio', href: '/' },
      { text: 'Promociones', href: '/#promociones' },
      { text: 'Sobre nosotros', href: '/#sobre-nosotros' },
    ],
    actions: [
      {
        href: `/#contacto`,
        text: 'Contacto',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><path d="M3 7l9 6l9 -6" /></svg>`,
      },
    ],
  },

  footer: {
    links: [
      {
        title: 'Support',
        links: [
          { text: 'Contact', href: `/contact/` },
          { text: 'Blog', href: `/blog/` },
          { text: 'Guides', href: `/blog/guides/` },
        ],
      },
      {
        title: 'MyWebsite',
        links: [
          { text: 'How it works', href: `/#features` },
          { text: 'About us', href: `/#about` },
        ],
      },
      {
        title: 'GearShift Universe',
        links: [
          { text: 'GearShift', href: 'https://gearshift.es/' },
          { text: 'postify AI', href: 'https://postifyai.com/' },
          { text: 'Estavia', href: 'https://estavia.ai/' },
          { text: 'AutoIPC', href: 'https://autoipc.es/' },
          { text: 'SynCal', href: 'https://syncal.app/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Terms and conditions', href: `/terms/` },
      { text: 'Privacy policy', href: `/privacy/` },
    ],
    socialLinks: [
      {
        ariaLabel: 'X',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>`,
        href: 'https://x.com/mywebsite',
      },
      // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/mywebsite' },
      // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/mywebsite' },
      {
        ariaLabel: 'RSS',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rss"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 4a16 16 0 0 1 16 16" /><path d="M4 11a9 9 0 0 1 9 9" /></svg>`,
        href: `/rss.xml`,
      },
    ],
    contactDetails: {
      address: 'Calle Santa Leonor, 64, Edifio D, Madrid',
      addressLink: 'https://maps.app.goo.gl/tb4McHigby4r5BeP7',
      email: 'hello@clement.es',
    },
    footNote: `
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© ${new Date().getFullYear()} <a href="/" class="hover:underline"
            >${SITE().title}</a
          >
        </span>
          `,
  },
});
