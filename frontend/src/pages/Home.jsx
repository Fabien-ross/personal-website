import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import { contentConfig } from "../config/contentConfig";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <DefaultLayout
        image_path="st-exupery.png"
        title={t("home_presentation.quote.content")}
        author={t("home_presentation.quote.author")}
        description={t("home_presentation.description")}
        other={
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {t("home_presentation.disclaimer")}
          </ReactMarkdown>
          }
        dark
      />
    </main>
  );
}
