const API_URL = import.meta.env.VITE_SERVER_API_URL;

export const getSet = async (lang, type) => {

  const response = await fetch(`${API_URL}/${lang}/${type}/`);

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}`);
  }
  const data = await response.json();

  console.log("data", data)

  return data.results;
};

export const getObject = async (lang, type, slug) => {

  const response = await fetch(`${API_URL}/${lang}/${type}/${slug}`);

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}/${slug}`);
  }
  const data = await response.json();

  console.log("data", data)

  return data;
};
