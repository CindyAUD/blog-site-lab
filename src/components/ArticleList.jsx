/**
 * ArticleList Component
 *
 * Purpose:
 * Renders all blog articles.
 *
 * Receives Props:
 * - articles
 *
 * Connected To:
 * - App.jsx
 * - Article.jsx
 */

import Article from "./Article";

function ArticleList({ articles }) {
  const articleComponents = articles.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      date={article.date}
      preview={article.preview}
    />
  ));

  return (
    <section>
      <h2>Articles</h2>
      {articleComponents}
    </section>
  );
}

export default ArticleList;