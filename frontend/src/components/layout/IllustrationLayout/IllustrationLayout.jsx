import "./IllustrationLayout.css";
import { useEffect, useRef } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import { API_ROUTES } from "../../../app/routes";

import ContentTextBox from "../../ui/ContentTextBox/ContentTextBox";

export default function IllustrationLayout({
  image_path,
  title,
  author,
  description,
  item,
  reverse = false,
  dark = false,
}) {
  const { setPageTheme } = usePageTheme();
  const ref = useRef(null);

  useEffect(() => {
    setPageTheme({
      dark,
      reverse,
    });
  }, [dark, reverse, setPageTheme]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Uniquement desktop avec souris/trackpad précis
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const SPEED = 0.4;

    const onWheel = (e) => {
      e.preventDefault();

      element.scrollBy({
        top: e.deltaY * SPEED,
        behavior: "auto",
      });
    };

    element.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section
    className="page"
    style={{
      "--background-color": dark ? "#1a1a1a" : "white",
      "--text-color": dark ? "white" : "#1a1a1a",
      "--img-side": reverse ? "right" : "left",
      "--txt-side": reverse ? "right" : "left",
      "--img-bg-color": item?.metadata?.bg_color,
    }}
  >
    <div className="mobile-title">
      {title?.trim() && <h1>{title}</h1>}
    </div>

    <div className="img-wrapper">
      
      <img
        className="illustration"
        src={API_ROUTES.image_route(image_path)}
        alt={image_path}
      />
    </div>

    <div className="illustration-wrapper" ref={ref}>
      <ContentTextBox
        className="illustration-content-box"
        title={title}
        author={author}
        description={description}
        dark={dark}
      />
    </div>
  </section>
  );
}