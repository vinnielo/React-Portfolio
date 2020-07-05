import React, { Component } from "react";
import axios from "axios"

export default class Contact extends Component {

  
  render() {
    const styles = {
      form: {
        width: "100%",
        backgroundColor: "#dee5f3",
        color: "black"
      },
      color: {
        color: "whitesmoke"
      },
    };

    let resumeData = this.props.resumeData;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={styles.color}>
              Feel free to reach out. I am always looking for new opportunities.
            </p>
            {/* <div className="row">
              <div>
              <form id="contact-form" >
                <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="firstname"
                  placeholder="Your name.."
                  style={styles.form}
                />

                <label for="exampleInputEmail">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email.."
                  style={styles.form}
                />

                <label for="message">Subject</label>
                <textarea
                  id="message"
                  name="subject"
                  placeholder="Write something.."
                  style={styles.form}
                />
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                </div>
              </form>
              </div>
            </div> */}
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  {<br></br>}
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.phone}</span>
                  <br></br>
                  <span>
                    <a href={`mailto:${resumeData.email}`}> {resumeData.email} </a>
                  </span>
                  <br></br>
                  <span>
                    <a href={resumeData.resume} target="_blank"> Link to Resume </a>
                  </span>

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
