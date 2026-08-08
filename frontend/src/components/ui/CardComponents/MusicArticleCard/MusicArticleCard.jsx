import { NavLink, useParams } from "react-router-dom";
import { usePageTheme } from "../../../themes/PageThemeContext";
import "./MusicArticleCard.css";

import { ROUTES } from "../../../../app/routes"

function MusicArticleCard({ article }) {
    const { pageTheme } = usePageTheme();
    const { lang } = useParams();

    return (
        <NavLink
            className="article-card"
            to={ROUTES.item_route(lang, article.type, article.translation.slug)}
            onClick={() => setIsOpen(false)}
            style={{
                "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
                "--text-color": pageTheme.dark ? "white" : "#1a1a1a",
                "--hover-background-color": pageTheme.dark ? "#333333" : "#eeeeee"
            }}
            >
            <div>{article.translation.title}</div>

            {article.translation.summary && (
                <div>
                    {article.translation.summary}
                </div>
            )}
        </NavLink>
    );
}

export default MusicArticleCard;