const API_URL = import.meta.env.VITE_SERVER_API_URL;

export const ROUTES = {
  type_route: (lang, type) => `/${lang}/docs/${type}`,
  item_route: (lang, type, slug) => `/${lang}/docs/${type}/${slug}`,
};

export const API_ROUTES = {
  type_route: (lang, type) => `${API_URL}/api/docs/${lang}/${type}/`,
  item_route: (lang, type, slug) => `${API_URL}/api/docs/${lang}/${type}/${slug}/`,
  image_route: (img) => `${API_URL}/media/images/${img}`,
}

export const LINKS = [ // enable links here
  { key: "home", path: lang => `/${lang}`, enabled: true },
  { key: "essays", path: lang => ROUTES.type_route(lang, "essays"), enabled: false },
  { key: "novels", path: lang => ROUTES.type_route(lang, "novels"), enabled: true },
  { key: "poems", path: lang => ROUTES.type_route(lang, "poems"), enabled: true },
  { key: "quotes", path: lang => ROUTES.type_route(lang, "quotes"), enabled: false },
  { key: "graphic", path: lang => ROUTES.type_route(lang, "graphic"), enabled: true },
  { key: "about", path: lang => `/${lang}/about`, enabled: true },
];