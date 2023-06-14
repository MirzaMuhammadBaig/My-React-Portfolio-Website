import React, { useState } from 'react'
import axios from 'axios'
import "./contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { BsWhatsapp } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const form = useRef();

  const NAME = (e) => {
    setName(e.target.value);
  };
  const EMAIL = (e) => {
    setEmail(e.target.value);
  };
  const SUBJECT = (e) => {
    setSubject(e.target.value);
  };
  const MESSAGE = (e) => {
    setMessage(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    data.preventDefault();
    setLoading(true);

    const obj = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "https://portfolio-contact-server-omega.vercel.app/sendmail",
        data: obj,
      });
      setLoading(false);
      alert("Thank you fo contacting, we will back you soon");
    } catch (err) {
      setLoading(false);
      alert("Something went wrong. Email could not be sent.");
    }
  };

  return (
    <div className='section' id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mirzamuhammadbaig328@gmail.com</h5>
            <a href="mailto:mirzamuhammadbaig328@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+92 3209246199</h5>
            <a href="https://api.whatsapp.com/send?phone=923209246199" target="_blank" rel="noreferrer">Click to chat on WhatsApp</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Mirza Muhammad Baig</h5>
            <a href="https://www.linkedin.com/in/muhammad-blockchain-developer/" target="_blank" rel="noreferrer">Let's Connect</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={submitForm}>
          <input type="text" name='name' value={name}
            onChange={NAME} placeholder='Your Full Name' required />
          <input type="email" name='email' value={email}
            onChange={EMAIL} placeholder='Your Email' required />
          <input type="text" name='subject' value={subject}
            onChange={SUBJECT} placeholder='Subject' required />
          <textarea name="message" value={message}
            onChange={MESSAGE} rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact