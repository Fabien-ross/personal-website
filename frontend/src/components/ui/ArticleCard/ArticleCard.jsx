import { NavLink, useParams } from "react-router-dom";
import { usePageTheme } from "../../themes/PageThemeContext";
import "./ArticleCard.css";

function ArticleCard({ article, type }) {
    const { pageTheme } = usePageTheme();
    const { lang } = useParams();

    return (
        <div className="article-card"
            style={{
            "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
            "--text-color": pageTheme.dark ? "white" : "#1a1a1a"
            }}
        >
            <NavLink to={`/${lang}/${type}/${article.slug}`} onClick={() => setIsOpen(false)}>
                {article.title}
            </NavLink>
            <div>{article.author}</div>
        </div>
    );
}

export default ArticleCard;