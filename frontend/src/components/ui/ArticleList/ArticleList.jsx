import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import "./ArticleList.css";

function ArticleList({ articles, type }) {
  return (
    <div className="articles">
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          type={type}
        />
      ))}
    </div>
  );
}

export default ArticleList;