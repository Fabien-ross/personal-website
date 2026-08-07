import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GeneralBackground from "../components/layout/GeneralBackground/GeneralBackground";
import ArticleList from "../components/ui/ArticleList/ArticleList";

import stexupImage from "../assets/images/stexup.png";
import denissowImage from "../assets/images/denissow.png";

import { contentConfig } from "../config/contentConfig";

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <GeneralBackground
        image={stexupImage}
        alt="stexup"
        title={t("about.title")}
        description={t("about.description")}
        other=""
        dark
      />
    </main>
  );
}