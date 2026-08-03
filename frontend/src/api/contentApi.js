const API_URL = import.meta.env.VITE_API_URL;

export async function getHello() {
  const res = await fetch(`${API_URL}/test/`);
  return res.json();
}

// mock data call
const path = "/data.json";

const getContent = async (type) => {

  const response = await fetch(path);
  // const response = await fetch(`/data/${type}.json`);

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}`);
  }

  return response.json();
};

export const getEssays = () => getContent("essays");
export const getPoems = () => getContent("poems");
export const getGraphic = () => getContent("graphic");
export const getQuotes = () => getContent("quotes");
export const getNovels = () => getContent("novels");
export const getMusic = () => getContent("music");
export const getComments = () => getContent("comments");