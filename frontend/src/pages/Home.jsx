import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GeneralBackground from "../components/layout/GeneralBackground/GeneralBackground";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import stexupImage from "../assets/images/stexup.png";
import denissowImage from "../assets/images/denissow.png";

import { contentConfig } from "../config/contentConfig";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <GeneralBackground
        image={stexupImage}
        alt="stexup"
        title={t("home_presentation.quote.content")}
        author={t("home_presentation.quote.author")}
        description={t("home_presentation.description")}
        other=""
        dark
      />
    </main>
  );
}