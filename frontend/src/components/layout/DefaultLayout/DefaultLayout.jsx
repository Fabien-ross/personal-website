import "./DefaultLayout.css";
import { useEffect, useRef } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import { API_ROUTES } from "../../../app/routes";

import ContentTextBox from "../../ui/ContentTextBox/ContentTextBox";

export default function DefaultLayout({
  image_path,
  title,
  author,
  description,
  other,
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
    if (!element || window.innerWidth < 768) return;

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
        "--img-position": reverse ? "auto 0 0 auto" : "auto 0 0 0",
        "--img-side": reverse ? "right" : "left",
        "--txt-side": reverse ? "left" : "right",
        "--box-position": reverse ? "0 30% 0 2.5%" : "0 2.5% 0 30%",
        "--paddings": reverse ? "40px 60px 60px 60px" : "40px 0px 60px 60px",
      }}
    >
      <img className="background-image" src={API_ROUTES.image_route(image_path)} alt={image_path} />
      <div className="wrapper" ref={ref}>
        <ContentTextBox 
          className="content-box" 
          title={title} 
          author={author} 
          description={description} 
          children={other} 
          dark={dark}
        /> 
        <div className="bottom-mask" />
      </div>
    </section> 
  );
}