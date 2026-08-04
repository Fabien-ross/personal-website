import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import { usePageTheme } from "../components/themes/PageThemeContext";
import GeneralBackground from "../components/layout/GeneralBackground/GeneralBackground";
import { getObject } from "../api/contentApi";


import { contentConfig } from "../config/contentConfig";
import { useRouteError } from "react-router-dom";

export default function SingleContent() {

  const { lang, type, slug } = useParams();
  const [item, setItem] = useState([]);
  const config = contentConfig[type];
  const { setAlternateSlug } = usePageTheme();

  useEffect(() => {

    async function loadItem() {
      if (!config) return;
      const data = await getObject(lang, type, slug);
      setItem(data);
    }

    loadItem();

  }, [type, slug]);

  useEffect(() => {
    if (item?.metadata?.alternateSlug) {
      setAlternateSlug(item.metadata.alternateSlug);
    }
  }, [item, setAlternateSlug]);

  if (!item?.translation) {
    return null;
  }

  return (
    <GeneralBackground
      image={config.image.src2}
        alt={config.image.alt2} 
      title={item.translation.title}
      author={item.published_at}
      description={item.translation.content}
      footer
      reverse
    />
  );
}