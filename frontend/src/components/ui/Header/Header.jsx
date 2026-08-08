import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../NavBar/NavBar.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import LanguageButton from "../Buttons/LanguageButton.jsx";
import { usePageTheme } from "../../themes/PageThemeContext";

import { ROUTES } from "../../../app/routes"
import "./Header.css"

function Header({ crossHeader }){
    const { pageTheme, setAlternateSlug } = usePageTheme();
    const { lang, type } = useParams();
    const navigate = useNavigate();

    return(
        <header className="header"
            style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a"
            }}
        >
            {!crossHeader &&
            <>
                <div className="header-left">
                    <Navbar />
                </div>

                <div className="header-left-small">
                    <SideMenu />
                </div>
            </>
            }

            <div className="header-right">
                <LanguageButton />
                {crossHeader &&
                    <button className="cross-button" onClick={
                        () => {
                            navigate(ROUTES.type_route(lang, type));
                            setAlternateSlug(null)}}>
                        ✕
                    </button>
                }
            </div>            
            
        </header>
    )
}

export default Header;