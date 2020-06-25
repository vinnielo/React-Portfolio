import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    const styles = {
      form: {
        width: "100%",
        backgroundColor: "#dee5f3"
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
              <form>
                <label>Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  style={styles.form}
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email.."
                  style={styles.form}
                />

                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={styles.form}
                />
                <button>Send</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
