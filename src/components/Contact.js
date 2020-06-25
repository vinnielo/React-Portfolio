import React, { Component } from "react";
import API from "../utils/API";

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

    

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={styles.color}>
              Feel free to reach out. I am always looking for new opportunities.
            </p>
            <div className="row">
              <div>
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                <button type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
