import './OneColumnLayout.css';
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import { API_ROUTES } from "../../../app/routes";

export default function OneColumnLayout({
  image_path,
  title,
  author,
  description,
  other,
  item,
  dark = false,
}) {
  const { setPageTheme } = usePageTheme();

  useEffect(() => {
    setPageTheme({
      dark,
    });
  }, [dark, setPageTheme]);

  return (
    <section
      className={"one-column-layout"}
      style={{
        '--background-color': dark ? '#1a1a1a' : 'white',
        '--text-color': dark ? 'white' : '#1a1a1a',
        '--img-bg-color': item.metadata?.bg_color ?? "white"
      }}
    >
      <img
        className={"one-col-image"}
        src={API_ROUTES.image_route(image_path)}
        alt={title}
      />

      <div className="one-col-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
