import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Developer Blog</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2>Welcome to the Developer Blog</h2>
          <p>
            Insights, tutorials, and stories from the world of software
            development.
          </p>
        </section>
        <section className="latest-posts">
          <h3>Latest Posts</h3>
          <article className="post">
            <h4>Understanding React Hooks</h4>
            <p>
              A deep dive into the world of React Hooks and how they can
              simplify your code.
            </p>
            <a href="#read-more">Read more</a>
          </article>
          <article className="post">
            <h4>JavaScript ES2021 Features</h4>
            <p>
              Explore the new features introduced in ES2021 and how to use them
              in your projects.
            </p>
            <a href="#read-more">Read more</a>
          </article>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Developer Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
