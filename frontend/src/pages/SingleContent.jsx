import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import { usePageTheme } from "../components/themes/PageThemeContext";
import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import IllustrationLayout from "../components/layout/IllustrationLayout/IllustrationLayout";

import { getItem  } from "../api/contentApi";


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
      const data = await getItem(lang, type, slug);
      setItem(data);
    }

    loadItem();

  }, [type, slug]);

  useEffect(() => {
    if (item?.translation?.lang_metadata?.alternateSlug) {
      setAlternateSlug(item.translation.lang_metadata.alternateSlug);
    }
  }, [item, setAlternateSlug]);

  if (!item?.translation) {
    return null;
  }

  if (type == "graphic"){
    return (
      <IllustrationLayout
        image_path={item.media}
        title={item.translation.title}
        description={item.translation.content}
        item={item}
        dark
      />
    );
  } else {
    return (
      <DefaultLayout
        image_path={item.media}
        title={item.translation.title}
        description={item.translation.content}
        reverse
      />
    );
  }
}