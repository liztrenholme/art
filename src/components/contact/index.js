import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <form
          className='contact-form'
          action="https://formspree.io/liztrenholme@gmail.com" 
          method="POST">
          <input className="text-input" placeholder="First Name" required type="text" name="first_name" />
          <input className="text-input" placeholder="Last Name" type="text" name="last_name" />
          <input className="text-input" placeholder="Your Email Address" required type="email" name="_replyto" />
          <textarea className="text-input" required rows="10" cols="38" name="message" placeholder="Message..." width="50%" height="50%"></textarea>
          <input type="submit" className='submit-button' value="Send" />
        </form>
      </div>
    );
  }
}


export default Contact;