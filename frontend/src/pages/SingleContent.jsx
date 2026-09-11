import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { usePageTheme } from "../components/themes/PageThemeContext";
import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import IllustrationLayout from "../components/layout/IllustrationLayout/IllustrationLayout";

import { getItem  } from "../api/contentApi";


import { contentConfig } from "../config/contentConfig";

export default function SingleContent() {

  const { lang, type, slug } = useParams();
  const [item, setItem] = useState([]);
  const config = contentConfig[type];
  const { setIsFallbackLang } = usePageTheme();

  useEffect(() => {

    async function loadItem() {
      if (!config) return;
      const data = await getItem(lang, type, slug);
      setItem(data);
    }

    loadItem();

  }, [type, slug]);

  useEffect(() => { // Set the fallback language if the translation language is not in the list of available languages
    console.log(item?.translation?.language, item?.languages);
    console.log(lang);
    if (item?.languages && item?.languages.length === 1) {
      setIsFallbackLang(true);
    }
  }, [item, setIsFallbackLang]);

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