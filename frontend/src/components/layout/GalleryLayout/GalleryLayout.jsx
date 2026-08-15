import './GalleryLayout.css';
import { useEffect } from "react";
import { usePageTheme } from "../../themes/PageThemeContext";

import ContentTextBox from '../../ui/ContentTextBox/ContentTextBox';

import { API_ROUTES } from "../../../app/routes";

export default function GalleryLayout({
  title,
  author,
  description,
  other,
  item,
  dark = false,
}) {
  const { setPageTheme } = usePageTheme();

  useEffect(() => {
    setPageTheme({ dark });
  }, [dark, setPageTheme]);

  return (
    <section
      className="gallery-layout"
      style={{
        '--background-color': dark ? '#1a1a1a' : 'white',
        '--text-color': dark ? 'white' : '#1a1a1a',
      }}
    >
    <ContentTextBox 
        className="gallery-box-col" 
        title={title} 
        author={author} 
        description={description} 
        children={other} 
        dark={dark}
      /> 
    </section>
  );
}

