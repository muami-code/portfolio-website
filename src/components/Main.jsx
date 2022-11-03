import React from "react";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.dataContent = this.dataContent.bind(this);
  }
  dataContent() {
    const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tc) => {
          tc.classList.remove("filters__active");
        });
        target.classList.add("filters__active");

        tabs.forEach((t) => {
          t.classList.remove("filter-tab-active");
        });
        tab.classList.add("filter-tab-active");
      });
    });
  }
  render() {
    return (
      <main className="main" onLoad={this.dataContent}>
        <section className="filters container">
          <ul className="filters__content">
            <button
              className="filters__button filter-tab-active"
              data-target="#projects"
            >
              Projects
            </button>
            <button className="filters__button" data-target="#skills">
              Skills
            </button>
          </ul>
          <div className="filters__sections">
            <div
              className="projects__content grid filters__active"
              data-content
              id="projects"
            >
              <article className="projects__card">
                <img src="img/project1.png" alt="" className="projects__img" />
                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Website</span>
                    <h3 className="projects__title">
                      Portfolio -
                      <a
                        href="/"
                        className="projects__button button button__small"
                      >
                        <i className="ri-link"></i>
                      </a>
                    </h3>
                    <a className="projects__button button-icon button__small">
                      <img src="/icons/git.png" alt="Git" title="Git" />
                      <img
                        src="/icons/express.png"
                        alt="Expressjs"
                        title="Expressjs"
                        style={{ filter: "invert()" }}
                      />
                      <img src="/icons/react.png" alt="React" title="React" />
                      <img
                        src="/icons/bootstrap.png"
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                      <img
                        src="/icons/node-js.png"
                        alt="Nodejs"
                        title="Nodejs"
                      />
                      <img
                        src="/icons/javascript.png"
                        alt="JavaScript"
                        title="JavaScript"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article className="projects__card">
                <img src="img/project2.png" alt="" className="projects__img" />
                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Web Application</span>
                    <h3 className="projects__title">
                      Notes App -
                      <a
                        target="_blank"
                        href="https://notes-app-mongodb-muami.herokuapp.com/"
                        className="projects__button button button__small"
                      >
                        <i className="ri-link"></i>
                      </a>
                    </h3>
                    <a className="projects__button button-icon button__small">
                      <img src="/icons/git.png" alt="Git" title="Git" />
                      <img
                        src="/icons/Mongo.svg"
                        alt="MongoDB"
                        style={{ width: 42 }}
                        title="MongoDB"
                      />
                      <img
                        src="/icons/express.png"
                        alt="Expressjs"
                        title="Expressjs"
                        style={{ filter: "invert()" }}
                      />
                      <img
                        src="/icons/bootstrap.png"
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                      <img
                        src="/icons/node-js.png"
                        alt="Nodejs"
                        title="Nodejs"
                      />
                      <img
                        src="/icons/javascript.png"
                        alt="JavaScript"
                        title="JavaScript"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article className="projects__card">
                <img src="img/project3.jpg" alt="" className="projects__img" />
                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Web Application</span>
                    <h3 className="projects__title">
                      Favorite Links App -
                      <a
                        href="#"
                        className="projects__button button button__small"
                        target="_blank"
                      >
                        <i className="ri-link"></i>
                      </a>
                    </h3>
                    <a className="projects__button button-icon button__small">
                      <img src="/icons/git.png" alt="Git" title="Git" />
                      <img src="/icons/mysql.png" alt="MySQL" title="MySQL" />
                      <img
                        src="/icons/bootstrap.png"
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                      <img src="/icons/php.png" alt="PHP" title="PHP" />
                      <img
                        src="/icons/javascript.png"
                        alt="JavaScript"
                        title="JavaScript"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article className="projects__card">
                <img src="img/project4.png" alt="" className="projects__img" />
                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Web Application</span>
                    <h3 className="projects__title">
                      Coingecko -
                      <a
                        href="https://angular-coingecko.herokuapp.com/"
                        className="projects__button button button__small"
                        target="_blank"
                      >
                        <i className="ri-link"></i>
                      </a>
                    </h3>
                    <a className="projects__button button-icon button__small">
                      <img src="/icons/git.png" alt="Git" title="Git" />
                      <img
                        src="/icons/express.png"
                        alt="Expressjs"
                        title="Expressjs"
                        style={{ filter: "invert()" }}
                      />
                      <img
                        src="/icons/angular.png"
                        alt="Angular"
                        title="Angular"
                      />
                      <img
                        src="/icons/node-js.png"
                        alt="Nodejs"
                        title="Nodejs"
                      />
                      <img
                        src="/icons/typescript.png"
                        alt="TypeScript"
                        title="TypeScript"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="skills__content grid" data-content id="skills">
              <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>
                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Angular/React</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>
                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Jquery</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Node Js</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">Express Js</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
