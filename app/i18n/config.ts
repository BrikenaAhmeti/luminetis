export const localeCodes = ["en", "fr", "de", "sq", "es", "pt", "it"] as const;

export type Locale = (typeof localeCodes)[number];

export const locales: Array<{ code: Locale; name: string; flag: string }> = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "sq", name: "Shqip", flag: "🇽🇰" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export type Dictionary = {
  nav: string[];
  menu: string;
  theme: string;
  language: string;
  light: string;
  dark: string;
  hero: {
    kicker: string;
    title: string;
    sub: string;
    primary: string;
    secondary: string;
    note: string;
  };
  pageKickers: string[];
  footerSite: string;
  footerOffices: string;
  footerLegal: string;
  footerTagline: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: ["Home", "Services", "Packages", "Work", "About", "Commitment", "Contact"],
    menu: "Menu",
    theme: "Theme",
    language: "Language",
    light: "Light theme",
    dark: "Dark theme",
    hero: {
      kicker: "Engineering that makes you visible",
      title: "Fast websites, built to be found, by engineers who stay.",
      sub: "For the business owner who needs to show up when someone nearby searches, and for the technical buyer who needs to know who is behind the infrastructure.",
      primary: "See packages",
      secondary: "Talk to us",
      note: "Two light sources, interfering. One of them follows your cursor. Move it and the field answers.",
    },
    pageKickers: ["Home", "Services", "Packages", "Work", "About", "Commitment", "Contact"],
    footerSite: "Site",
    footerOffices: "Offices",
    footerLegal: "Legal",
    footerTagline: "We put light to work.",
  },
  fr: {
    nav: ["Accueil", "Services", "Forfaits", "Réalisations", "À propos", "Engagements", "Contact"],
    menu: "Menu",
    theme: "Thème",
    language: "Langue",
    light: "Thème clair",
    dark: "Thème sombre",
    hero: {
      kicker: "L'ingénierie qui vous rend visible",
      title: "Des sites rapides, conçus pour être trouvés, par des ingénieurs qui restent.",
      sub: "Pour le dirigeant qui doit apparaître quand quelqu'un cherche à proximité, et pour l'acheteur technique qui veut savoir qui est derrière l'infrastructure.",
      primary: "Voir les forfaits",
      secondary: "Parlons-en",
      note: "Deux sources de lumière qui interfèrent. L'une suit votre curseur. Bougez-le et le champ répond.",
    },
    pageKickers: ["Accueil", "Services", "Forfaits", "Réalisations", "À propos", "Engagements", "Contact"],
    footerSite: "Site",
    footerOffices: "Bureaux",
    footerLegal: "Mentions légales",
    footerTagline: "Nous mettons la lumière au travail.",
  },
  de: {
    nav: ["Start", "Leistungen", "Pakete", "Arbeiten", "Über uns", "Verpflichtungen", "Kontakt"],
    menu: "Menü",
    theme: "Design",
    language: "Sprache",
    light: "Helles Design",
    dark: "Dunkles Design",
    hero: {
      kicker: "Technik, die Sie sichtbar macht",
      title: "Schnelle Websites, gebaut um gefunden zu werden, von Ingenieuren, die bleiben.",
      sub: "Für den Inhaber, der erscheinen muss, wenn jemand in der Nähe sucht, und für den technischen Entscheider, der wissen will, wer hinter der Infrastruktur steht.",
      primary: "Pakete ansehen",
      secondary: "Sprechen wir",
      note: "Zwei Lichtquellen, die interferieren. Eine folgt Ihrem Cursor. Bewegen Sie ihn, und das Feld antwortet.",
    },
    pageKickers: ["Start", "Leistungen", "Pakete", "Arbeiten", "Über uns", "Verpflichtungen", "Kontakt"],
    footerSite: "Seiten",
    footerOffices: "Büros",
    footerLegal: "Rechtliches",
    footerTagline: "Wir setzen Licht ein.",
  },
  sq: {
    nav: ["Kreu", "Shërbimet", "Paketat", "Punët", "Rreth nesh", "Zotimet", "Kontakti"],
    menu: "Menyja",
    theme: "Pamja",
    language: "Gjuha",
    light: "Pamja e çelët",
    dark: "Pamja e errët",
    hero: {
      kicker: "Inxhinieri që të bën të dukshëm",
      title: "Faqe të shpejta, ndërtuara për t'u gjetur, nga inxhinierë që qëndrojnë.",
      sub: "Për pronarin që duhet të shfaqet kur dikush pranë kërkon, dhe për blerësin teknik që duhet të dijë kush qëndron pas infrastrukturës.",
      primary: "Shiko paketat",
      secondary: "Bisedo me ne",
      note: "Dy burime drite që interferojnë. Një ndjek kursorin tuaj. Lëvizeni dhe fusha përgjigjet.",
    },
    pageKickers: ["Kreu", "Shërbimet", "Paketat", "Punët", "Rreth nesh", "Zotimet", "Kontakti"],
    footerSite: "Faqet",
    footerOffices: "Zyrat",
    footerLegal: "Ligjore",
    footerTagline: "Ne e vëmë dritën në punë.",
  },
  es: {
    nav: ["Inicio", "Servicios", "Paquetes", "Proyectos", "Nosotros", "Compromisos", "Contacto"],
    menu: "Menú",
    theme: "Tema",
    language: "Idioma",
    light: "Tema claro",
    dark: "Tema oscuro",
    hero: {
      kicker: "Ingeniería que te hace visible",
      title: "Sitios rápidos, hechos para ser encontrados, por ingenieros que se quedan.",
      sub: "Para el dueño que necesita aparecer cuando alguien busca cerca, y para el comprador técnico que necesita saber quién está detrás de la infraestructura.",
      primary: "Ver paquetes",
      secondary: "Hablemos",
      note: "Dos fuentes de luz que interfieren. Una sigue tu cursor. Muévelo y el campo responde.",
    },
    pageKickers: ["Inicio", "Servicios", "Paquetes", "Proyectos", "Nosotros", "Compromisos", "Contacto"],
    footerSite: "Sitio",
    footerOffices: "Oficinas",
    footerLegal: "Legal",
    footerTagline: "Ponemos la luz a trabajar.",
  },
  pt: {
    nav: ["Início", "Serviços", "Pacotes", "Projetos", "Sobre", "Compromissos", "Contacto"],
    menu: "Menu",
    theme: "Tema",
    language: "Idioma",
    light: "Tema claro",
    dark: "Tema escuro",
    hero: {
      kicker: "Engenharia que o torna visível",
      title: "Sites rápidos, feitos para serem encontrados, por engenheiros que ficam.",
      sub: "Para o proprietário que precisa de aparecer quando alguém procura por perto, e para o comprador técnico que precisa de saber quem está por trás da infraestrutura.",
      primary: "Ver pacotes",
      secondary: "Fale connosco",
      note: "Duas fontes de luz a interferir. Uma segue o seu cursor. Mova-o e o campo responde.",
    },
    pageKickers: ["Início", "Serviços", "Pacotes", "Projetos", "Sobre", "Compromissos", "Contacto"],
    footerSite: "Site",
    footerOffices: "Escritórios",
    footerLegal: "Legal",
    footerTagline: "Colocamos a luz a trabalhar.",
  },
  it: {
    nav: ["Home", "Servizi", "Pacchetti", "Lavori", "Chi siamo", "Impegni", "Contatti"],
    menu: "Menu",
    theme: "Tema",
    language: "Lingua",
    light: "Tema chiaro",
    dark: "Tema scuro",
    hero: {
      kicker: "Ingegneria che ti rende visibile",
      title: "Siti veloci, costruiti per essere trovati, da ingegneri che restano.",
      sub: "Per il titolare che deve comparire quando qualcuno cerca vicino, e per il buyer tecnico che vuole sapere chi c'è dietro l'infrastruttura.",
      primary: "Vedi i pacchetti",
      secondary: "Parliamone",
      note: "Due sorgenti di luce che interferiscono. Una segue il cursore. Muovilo e il campo risponde.",
    },
    pageKickers: ["Home", "Servizi", "Pacchetti", "Lavori", "Chi siamo", "Impegni", "Contatti"],
    footerSite: "Sito",
    footerOffices: "Uffici",
    footerLegal: "Note legali",
    footerTagline: "Mettiamo la luce al lavoro.",
  },
};

export function resolveLocale(value?: string | null): Locale {
  return matchLocale(value) ?? "en";
}

export function matchLocale(value?: string | null): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase().split("-")[0];
  return localeCodes.includes(normalized as Locale) ? (normalized as Locale) : null;
}

export function localeFromCountry(country?: string | null): Locale | null {
  if (!country) return null;
  const code = country.toUpperCase();
  if (["AL", "XK", "KS"].includes(code)) return "sq";
  if (["FR", "LU", "MC", "BE"].includes(code)) return "fr";
  if (["DE", "AT", "CH", "LI"].includes(code)) return "de";
  if (["ES", "MX", "AR", "CL", "CO", "PE", "UY"].includes(code)) return "es";
  if (["PT", "BR"].includes(code)) return "pt";
  if (["IT", "SM", "VA"].includes(code)) return "it";
  if (["GB", "US", "CA", "IE", "AU", "NZ"].includes(code)) return "en";
  return null;
}
