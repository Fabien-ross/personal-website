import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import GeneralBackground from "../components/layout/GeneralBackground/GeneralBackground";

import { contentConfig } from "../config/contentConfig";
import { useRouteError } from "react-router-dom";

export default function SingleContent() {

  const { category, slug } = useParams();
  const [item, setItem] = useState([]);
  const config = contentConfig[category];

  useEffect(() => {

    async function loadItem() {
      if (!config) return;
      const data = await config.getData();
      const found = data.find(item => item.slug === slug);
      setItem(found);
    }

    loadItem();

  }, [category, slug]);

  if (!config || !item) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  return (
    <GeneralBackground
      image={config.image.src2}
        alt={config.image.alt2} 
      title={item.title}
      author={item.author}
      description={item.content}
      footer
      reverse
    />
  );
}