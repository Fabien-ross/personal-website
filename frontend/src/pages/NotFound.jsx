import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import { contentConfig } from "../config/contentConfig";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main>
      <DefaultLayout
        image_path="st-exupery.png"
        title={t("not_found.title")}
        author=""
        description={t("not_found.description")}
        other=""
      />
    </main>
  );
}