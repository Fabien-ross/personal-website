import "./GeneralBackground.css";
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import ImageColumn from "../../ui/ImageColumn/ImageColumn";
import TextColumn from "../../ui/TextColumn/TextColumn";

function GeneralBackground({
  image,
  alt,
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
      className={`general-background${reverse ? "-reversed" : ""}`}
      style={{
        "--background-color": dark ? "#1a1a1a" : "white",
        "--text-color": dark ? "white" : "#1a1a1a",
        "--image-column": reverse ? 2 : 1,
        "--text-column": reverse ? 1 : 2,
        "--zero-reverse": reverse ? "auto" : 0,
        "--one-reverse": reverse ? 0 : "auto",
      }}
    >
      <ImageColumn className="col-image" alt={alt} image={image}/>
      <TextColumn className="col-text" title={title} author={author} description={description} other={other} />
    </section>
    
  );
}

export default GeneralBackground;