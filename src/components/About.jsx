function About({ about, avatar }) {
  return (
    <section className="about-card">
      <img
        src={avatar}
        alt="profile"
        className="avatar"
      />

      <div>
        <h2>About Me</h2>
        <p>{about}</p>
      </div>
    </section>
  );
}

export default About;