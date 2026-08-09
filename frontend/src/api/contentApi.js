import { API_ROUTES } from "../app/routes"

export const getItemSet = async (lang, type) => {


  const response = await fetch(API_ROUTES.type_route(lang, type));

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}`);
  }
  const data = await response.json();

  //console.log("data", data)

  return data.results;
};

export const getItem = async (lang, type, slug) => {

  const response = await fetch(API_ROUTES.item_route(lang, type, slug));

  if (!response.ok) {
    throw new Error(`Impossible to charge ${type}/${slug}`);
  }
  const data = await response.json();

  //console.log("data", data)

  return data;
};

export const sendForm = async (email, message) => {

  const response = await fetch(`${API_URL}/api/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      message: message,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Error sending message.");
  }
};
