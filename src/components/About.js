import React, { Component } from "react";
import mainImg from '../assets/images/main2.jpg';
export default class About extends Component {
  render() {
    
    
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={mainImg}
              alt="VinnieLopez"

            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <p>{resumeData.aboutme2}</p>
            <p>{resumeData.aboutme3}</p>
            <p>{resumeData.aboutme4}</p>
          </div>
        </div>
      </section>
    );
  }
}
