import "./GeneralBackground.css";
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

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
      <section className="col-image">
        <img className={alt} src={image} alt={alt} />
      </section>

      <section className="col-text">
        <div className="col-text-content">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <div className="description">
            {description.split(/\r\n\r\n/).map((stanza, i) => (
              <p className="stanza" key={i}>
                {stanza.split(/\r\n/).map((line, j) => (
                  <span key={j}>
                    {line.trim()}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>
          {other && <div className="other">{other}</div>}
        </div>
      </section>
    </section>
    
  );
}

export default GeneralBackground;