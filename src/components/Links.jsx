function Links({ links }) {
  return (
    <section className="links-card">
      <h2>Find Me Online</h2>

      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Links;