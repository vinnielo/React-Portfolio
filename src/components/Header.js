import React, { Component } from "react";
export default class Header extends Component {  
  render() {

    const styles = {
      form: {
        fontSize: "16px"
      },
    };

    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current" >
                <a className="smoothscroll" href="#home" style={styles.form}>
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" style={styles.form}>
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume" style={styles.form}>
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" style={styles.form}>
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials" style={styles.form}>
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" style={styles.form}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <img src={resumeData.logo} />

              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
