import blog from "./data/blog";

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />

      <main>
        <About
          about={blog.about}
          avatar={blog.avatar}
        />

        <ArticleList articles={blog.articles} />

        <Links links={blog.links} />
      </main>
    </div>
  );
}

export default App;