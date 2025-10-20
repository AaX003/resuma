import "../css/Contact.css";

function Contact() {
  return (
    <div className="container__contact" id="contact">
      <section className="hero__contact">
        <header className="title__hero">
          <h3 className="title__contact">Let’s Hear From You</h3>
          <p className="subtitle__contact">
            Have questions, feedback, or ideas?  
            Drop us a message below and our team will respond within 24 hours.
          </p>
        </header>
      </section>

      <section className="container__form">
        <form
          className="form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact form"
        >
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-row half">
            <div>
              <label htmlFor="fname">First Name</label>
              <input id="fname" type="text" placeholder="First name" required />
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input id="lname" type="text" placeholder="Last name" required />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button className="send-btn" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;