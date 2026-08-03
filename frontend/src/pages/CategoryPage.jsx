import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GeneralBackground from "../components/layout/GeneralBackground/GeneralBackground";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import { contentConfig } from "../config/contentConfig";
import { useRouteError } from "react-router-dom";

export default function CategoryPage() {

  const { category } = useParams();
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const config = contentConfig[category];

  useEffect(() => {

    async function loadData() {
      if (!config) return;
      const data = await config.getData();
      setItems(data);
    }

    loadData();

  }, [category]);

  console.log("CategoryPage.jsx - items:", items);

  if (!config) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  return (
    <main>
      <GeneralBackground
        image={config.image.src1}
        alt={config.image.alt1} 
        title={t(config.title)}
        author=""
        description={t(config.description)}
        other={<ArticleList articles={items} type={config.type} />}
        footer={config.footer}
        reverse={config.reverse}
        dark={config.dark}
      />
    </main>
  );
}