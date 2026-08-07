import { NavLink, useParams } from "react-router-dom";
import { usePageTheme } from "../../themes/PageThemeContext";
import "./ArticleCard.css";

import { ROUTES } from "../../../app/routes"

function ArticleCard({ article }) {
    const { pageTheme } = usePageTheme();
    const { lang } = useParams();

    return (
        <div className="article-card"
            style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a"
            }}
        >
            <NavLink to={ROUTES.item_route(lang, article.type, article.translation.slug)} onClick={() => setIsOpen(false)}>
                {article.translation.title}
            </NavLink>
            {article.translation.summary && (
            <div>
                {article.translation.summary}
            </div>
            )}
        </div>
    );
}

export default ArticleCard;