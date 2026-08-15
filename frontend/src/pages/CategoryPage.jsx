import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import GalleryLayout from "../components/layout/GalleryLayout/GalleryLayout";
import ArticleList from "../components/ui/ArticleList/ArticleList";
import { getItemSet as getItemSet } from "../api/contentApi";

import {
  WrittenArticleCard,
  MusicArticleCard,
  IllustrationArticleCard,
} from "../components/ui/CardComponents";

import { contentConfig } from "../config/contentConfig";
import { useRouteError } from "react-router-dom";

export default function CategoryPage() {

  const { lang, type } = useParams();
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const config = contentConfig[type];

  useEffect(() => {

    async function loadData() {
      if (!config) return;
      const data = await getItemSet(lang, type);
      setItems(data);
    }

    loadData();

  }, [type]);

  // if (!config) {
  //   throw new Response("Not Found", {
  //     status: 404
  //   });
  // }

  const articleCards = {
    graphic: IllustrationArticleCard,
    music: MusicArticleCard,
    };

  const CardComponent = articleCards[type] || WrittenArticleCard;

  if (type == "graphic"){
      return (
        <GalleryLayout
          title={t(config.title)}
          description={t(config.description)}
          other={<ArticleList CardComponent={CardComponent} articles={items} />}
          dark={config.dark}
        />
      );
    } else {
        return (
      <main>
        <DefaultLayout
          image_path={config.image.src1}
          title={t(config.title)}
          description={t(config.description)}
          other={<ArticleList CardComponent={CardComponent} articles={items} />}
          reverse={config.reverse}
          dark={config.dark}
        />
      </main>
    );
  }
}