import React from 'react';

const Contact = () => {

  return (
    <div>

      {/* General Inquiries Form */}
      <section>
        <h3>General Inquiries</h3>
        <p>
          Have a question or need information? Reach out to us using the form below.
        </p>
        <form>
          {/* Include form fields such as name, email, message, etc. */}
          {/* Add logic to handle form submission */}
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message" rows="1"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <br/>

      {/* Address and Directions */}
      <section>
        <h3>Visit Us</h3>
        <p>
          Stop by our church! Find our address and directions below.
        </p>
        <address>
          {/* Include church address and directions */}
          <p>123 Church St, Cityville, Country</p>
        </address>
      </section>

      {/* Social Media Links */}
      <section>
        <h3>Connect With Us</h3>
        <p>
          Stay connected with us on social media.
        </p>
        {/* Add social media icons/links */}
        <div>
          <a href="https://www.facebook.com/churchname" target="_blank" rel="noopener noreferrer">

            <img src="facebook-icon.png" alt="Facebook" />
          </a><br/>
          
          <a href="https://twitter.com/churchname" target="_blank" rel="noopener noreferrer">

            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media icons/links as needed */}
        </div>
      </section>
    </div>
  );
}
export default Contact;
