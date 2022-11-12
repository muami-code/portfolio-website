import React from "react";
import ScrollReveal from "scrollreveal";
import './profile.css'

export default class Profile extends React.Component {
  
  constructor(props) {
    super(props);
    this.dataTarget = this.dataTarget.bind(this);
  }
  dataTarget() {
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";
    if (selectedTheme) {
      document.body.classList[selectedTheme === "light" ? "remove" : "add"](darkTheme);
      themeButton.classList[selectedIcon === "ri-moon-line" ? "remove" : "add"](iconTheme);
    }
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });
    
    /* ScrollReveal */
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal(".profile__border");
    sr.reveal(".profile__name", { delay: 500 });
    sr.reveal(".profile__profession", { delay: 600 });
    sr.reveal(".profile__social", { delay: 700 });
    sr.reveal(".profile__info-group", { interval: 100, delay: 700 });
    sr.reveal(".profile__buttons", { delay: 800 });
    sr.reveal(".filters__content", { delay: 900 });
    sr.reveal(".filters", { delay: 1000 });
  }

  render() {
    return (
      <header className="profile container" onLoad={this.dataTarget} id="profile">
        <i className="ri-moon-line change-theme" id="theme-button"></i>
        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <img src="img/perfil.png" />
              </div>
            </div>
            <h2 className="profile__name">Sebastián Saavedra</h2>
            <h3 className="profile__profession">Web developer</h3>
          </div>
        </div>
        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">A little bit About Me...</h3>
            <p className="profile__info-description">
              I'm 20, I'm Fullstack Web Developer, self-taught tech student and
              lover of Linux customizations, I love{" "}
              <a
                target="_blank"
                href="https://thatnixguy.github.io/posts/ricing/#:~:text=Rice%2FRicing,also%20known%20as%20%E2%80%9Cricing%E2%80%9D."
              >
                Rice/Ricing
              </a>
              . In my free time I read about technology, I drink coffee and most
              of all I like to go Skateboarding.
              <br />
              <br />
              If you want to know more about me you can follow me on my social
              networks...
            </p>
            <br />
          </div>
        </div>
        <div className="profile__social">
          <a
            href="https://github.com/muami-code"
            target="__blank"
            className="profile__social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-saavedra-4573b8227/"
            target="__blank"
            className="profile__social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <br />
        <div className="profile__buttons">
          <a download="" href="pdf/CV-Sebastian.pdf" className="button">
            Download CV <i className="ri-download-line"></i>
          </a>
          <div className="profile__buttons-small">
            <a
              href="https://api.whatsapp.com/send?phone=598093438192&text=Hello, more information!"
              target="_blank"
              className="button button__small button__gray"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
