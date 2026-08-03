import "./GeneralBackground.css";
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";
import Footer from "../../ui/Footer/Footer.jsx";

function GeneralBackground({
  image,
  alt,
  title,
  author,
  description,
  other,
  footer = false,
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
      <section className="col-image">
        <img className={alt} src={image} alt={alt} />
      </section>

      <section className="col-text">
        <div className="col-text-content">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <p className="description">{description}</p>
          {other && <div className="other">{other}</div>}
        </div>
      </section>
      {footer && <Footer className="footer" />}
    </section>
    
  );
}

export default GeneralBackground;