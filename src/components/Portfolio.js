import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    const styles={
      border:{
        boxShadow: "4px 4px 10px red",
        width: "300px"
      },
      space:{
        width: "350px"
      },
      content: {
        width:"107%"
      }
    }
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" >
          {/* <nav id="nav-wrap">            
            <ul id="nav" className="nav">
              <li className="current" >
                <a href="#" style={styles.form}>
                  Home
                </a>
              </li>
              <li>
                <a  href="#" style={styles.form}>
                  About
                </a>
              </li>
              <li>
                <a  href="#" style={styles.form}>
                  Resume
                </a>
              </li>              
            </ul>
          </nav> */}
        <div className="row">
          <div className="twelve columns collapsed" style={styles.content}>
            <h1>Check Out Some of My Projects.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf" 
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" style={styles.space} >
                      <div className="item-wrap"style={styles.border}>
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <hr></hr>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        
                      </div><br></br>
                      {item.name}:{" "}
                      <a
                        href={item.link}
                        target="_blank"
                        className="fa fa-external-link fa-2x"
                      >{" "}
                      </a>{" "}
                      <a href={item.github} target="_blank">
                        <i className={item.icon} />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
