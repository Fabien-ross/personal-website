import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import "./ArticleList.css";

function ArticleList({ articles }) {
  return (
    <div className="articles">
      {articles.map(article => (
        <ArticleCard
          article={article}
          key={article.translation.slug}
        />
      ))}
    </div>
  );
}

export default ArticleList;