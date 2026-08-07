export const ROUTES = {
  type_route: (lang, type) => `/${lang}/docs/${type}`,
  item_route: (lang, type, slug) => `/${lang}/docs/${type}/${slug}`,
};

export const LINKS = [ // enable links here
  { key: "home", path: lang => `/${lang}`, enabled: true },
  { key: "essays", path: lang => ROUTES.type_route(lang, "essays"), enabled: false },
  { key: "novels", path: lang => ROUTES.type_route(lang, "novels"), enabled: true },
  { key: "poems", path: lang => ROUTES.type_route(lang, "poems"), enabled: true },
  { key: "quotes", path: lang => ROUTES.type_route(lang, "quotes"), enabled: false },
  { key: "about", path: lang => `/${lang}/about`, enabled: true },
];