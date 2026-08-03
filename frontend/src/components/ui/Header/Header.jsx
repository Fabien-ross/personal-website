import Navbar from "../NavBar/NavBar.jsx";
import Menu from "../Menu/Menu.jsx";
import LanguageButton from "../Buttons/LanguageButton.jsx";
import { usePageTheme } from "../../themes/PageThemeContext";
import "./Header.css"

function Header(){
    const { pageTheme } = usePageTheme();

    return(
        <header className="header"
            style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a"
            }}
        >
            <div className="header-left">
                <Navbar />
            </div>

            <div className="header-left-small">
                <Menu />
            </div>

            <div className="header-right">
                <LanguageButton />
            </div>
            
        </header>
    )
}

export default Header;