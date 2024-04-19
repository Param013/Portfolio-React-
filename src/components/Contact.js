// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
