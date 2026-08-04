const API_URL = import.meta.env.SERVER_API_URL;

export async function getHello() {
  const res = await fetch(`${API_URL}/test/`);
  return res.json();
}

// mock data call
const path = "/data.json";

export const getSet = async (lang, type) => {

  // const response = await fetch(path);
  // const response = await fetch(`${API_URL}/${lang}/${type}/`);
  const response = await fetch(`http://localhost:8000/${lang}/${type}/`);

  console.log("response", response);

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}`);
  }

  const data = await response.json();

  console.log("data", data);
  console.log("results", data.results);
  return data.results;
};

export const getObject = async (lang, type, slug) => {

  // const response = await fetch(path);
  // const response = await fetch(`${API_URL}/${lang}/${type}/`);
  const response = await fetch(`http://localhost:8000/${lang}/${type}/${slug}/`);

  console.log("response", response);

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}/${slug}`);
  }

  const data = await response.json();

  console.log("data", data);
  return data;
};
