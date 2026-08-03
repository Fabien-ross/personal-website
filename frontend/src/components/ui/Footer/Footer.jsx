import "./Footer.css"
import { usePageTheme } from "../../themes/PageThemeContext";
import { useTranslation } from "react-i18next";


function Footer(){

    const { pageTheme } = usePageTheme();
    const { t } = useTranslation();

    return(
        <footer className="footer"
        style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a",
            "--zero-reverse": pageTheme.reverse ? "auto" : 0,
            "--one-reverse": pageTheme.reverse ? 0 : "auto",
            }}
        >
            <div className="description">
                {t("home_presentation.fabien-rosset")}
            </div>
            
        </footer>
    )
}

export default Footer;