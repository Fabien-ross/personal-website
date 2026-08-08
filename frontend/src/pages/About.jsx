import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import TwoColumnsLayout from "../components/layout/TwoColumnsLayout/TwoColumnsLayout";
import ArticleList from "../components/ui/ArticleList/ArticleList";
import ContactForm from "../components/ui/ContactForm/ContactForm";

import { contentConfig } from "../config/contentConfig";

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <TwoColumnsLayout
        image_path="st-exupery.png"
        title={t("about.title")}
        description={t("about.description")}
        other={<ContactForm />}
        dark
      />
    </main>
  );
}