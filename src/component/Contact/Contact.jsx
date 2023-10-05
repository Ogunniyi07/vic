import React from 'react'
import './Contact.scss'
import {FaLocationArrow, FaTwitter} from 'react-icons/fa'


const Contact = () => {
  return (
    <div className="contact">
         <div className="contact-container">
       <h2>Contact Us</h2>
        <p>
          For questions, concerns, or requests related to this Privacy Policy or
          our data practices, please contact us at:
        </p>
        <div className="contact-btn">
          <button>
          <FaTwitter />  &nbsp;
            Follow us on Twitter
          </button>
          <button>
           <FaLocationArrow /> &nbsp;
            Send us a message</button>
        </div>
       </div>
       </div>
  )
}

export default Contact