import "./ArticleList.css";

function ArticleList({ CardComponent, articles }) {
  return (
    <div className="articles">
      {articles.map(article => (
        <CardComponent  article={article} key={article.translation.slug} />
      ))}
    </div>
  );
}

export default ArticleList;