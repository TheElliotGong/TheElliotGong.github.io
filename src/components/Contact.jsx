import React from 'react';

function Contact() {
  return (
    <footer>
      <div className="container" id="contact">
        <h1 className="has-text-centered has-text-weight-bold is-size-3-desktop is-size-4-touch">
          Send a Message!
        </h1>
        <form
          className="columns is-multiline rows is-3"
          method="POST"
          action="https://formsubmit.co/d770d6bf7193d2bd890f0f4b9156243a"
        >
          <div className="column is-half">
            <input type="text" name="name" placeholder="Name" id="contactName" required />
          </div>
          <div className="column is-half">
            <input type="email" name="email" placeholder="Email" id="contactEmail" required />
          </div>
          <div className="column is-full">
            <textarea
              name="message"
              cols="30"
              rows="4"
              placeholder="Message"
              id="contactMessage"
              required
            ></textarea>
          </div>
          <div className="column is-full">
            <button className="is-size-5" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Contact;
