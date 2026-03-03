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
        title: 'Clement',
        links: [
          { text: 'Contacto', href: `/#contacto` },
          { text: 'Sobre nosotros', href: `/#sobre-nosotros` },
          { text: 'Promociones', href: `/#promociones` },
        ],
      },
      {
        title: 'Promociones',
        links: [
          { text: 'Alameda de Osuna I', href: '/promociones/alameda-de-osuna-i' },
          { text: 'Alameda de Osuna II', href: '/promociones/alameda-de-osuna-ii' },
          { text: 'Alameda de Osuna III', href: '/promociones/alameda-de-osuna-iii' },
          { text: 'Alameda de Osuna IV', href: '/promociones/alameda-de-osuna-iv' },
          { text: 'Alameda de Osuna V', href: '/promociones/alameda-de-osuna-v' },
          { text: 'Puerta de Hierro', href: 'https://clementpuertadehierro.com/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Términos y condiciones', href: `/terms/` },
      { text: 'Política de privacidad', href: `/privacy/` },
    ],
    socialLinks: [],
    contactDetails: {
      address: 'Santibáñez de Bejar, 6, Madrid',
      addressLink: 'https://maps.app.goo.gl/tb4McHigby4r5BeP7',
      email: 'info@clement.es',
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
