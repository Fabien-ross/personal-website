import "./TwoColumnsLayout.css";
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import { API_ROUTES } from "../../../app/routes";

import ImageColumn from "../../ui/ImageColumn/ImageColumn";
import TextColumn from "../../ui/TextColumn/TextColumn";

export default function TwoColumnsLayout({
  image_path,
  title,
  author,
  description,
  other,
  reverse = false,
  dark = false,
}) {
  const { setPageTheme } = usePageTheme();

  useEffect(() => {
    setPageTheme({
      dark,
      reverse,
    });
  }, [dark, reverse, setPageTheme]);

  return (
    <section
      className={`two-columns-layout${reverse ? "-reversed" : ""}`}
      style={{
        "--background-color": dark ? "#1a1a1a" : "white",
        "--text-color": dark ? "white" : "#1a1a1a",
        "--image-column": reverse ? 2 : 1,
        "--text-column": reverse ? 1 : 2,
        "--zero-reverse": reverse ? "auto" : 0,
        "--one-reverse": reverse ? 0 : "auto",
      }}
    >
      <ImageColumn className="col-image" alt={image_path} image={API_ROUTES.image_route(image_path)}/>
      <TextColumn className="col-text" title={title} author={author} description={description} children={other} />
    </section>
    
  );
}