function Article({ title, date, preview }) {
  return (
    <article className="article-card">
      <h3>{title}</h3>
      <small>{date}</small>

      <p>{preview}</p>

      <button>Read More</button>
    </article>
  );
}

export default Article;