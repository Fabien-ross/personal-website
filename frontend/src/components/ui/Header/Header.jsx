import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../NavBar/NavBar.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import LanguageButton from "../Buttons/LanguageButton.jsx";
import { usePageTheme } from "../../themes/PageThemeContext";

import { ROUTES } from "../../../app/routes"
import "./Header.css"

function Header({ crossHeader }){
    const { pageTheme, setIsFallbackLang } = usePageTheme();
    const { lang, type, slug } = useParams();
    const navigate = useNavigate();

    return(
        <header className="header"
            style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a",
            "--is-item-page": slug !== undefined ? "flex" : "none"
        }}>
            
            {!crossHeader && /*Classic navbar if we are not on an article (crossHeader)*/
                <>
                    <div className="header-left" > 
                        <Navbar />
                    </div>
                </>
            }

            <div className="header-left-small" /*Side Menu if the window is small (see .css)*/>
                <SideMenu />
            </div>
            
            <div className="header-right" /*Right part of the header (includes language and/or cross buttons)*/>
                <LanguageButton className="lang-button"/>
                {crossHeader && /*If cross header includes cross button*/
                    <button className="cross-button" onClick={
                        () => {
                            navigate(ROUTES.type_route(lang, type));
                            setIsFallbackLang(false)}}>
                        ✕
                    </button>
                }
            </div>            
        </header>
    )
}

export default Header;