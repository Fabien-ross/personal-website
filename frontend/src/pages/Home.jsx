import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import TwoColumnsLayout from "../components/layout/TwoColumnsLayout/TwoColumnsLayout";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import { contentConfig } from "../config/contentConfig";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <TwoColumnsLayout
        image_path="st-exupery.png"
        title={t("home_presentation.quote.content")}
        author={t("home_presentation.quote.author")}
        description={t("home_presentation.description")}
        other=""
        dark
      />
    </main>
  );
}