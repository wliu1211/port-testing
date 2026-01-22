import React, {useState} from 'react'
import axios from 'axios'
import "./Contact.css"
import Modal from '../Modal/Modal';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);


  const sendEmail = () => {
    const sendSuccess = () => {
      alert('Email sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    }
    const sendFailed = () => {
      console.error('Email failed to send');
      setName('');
      setEmail('');
      setMessage('');
    }
    if(name && email && message) {
      axios.post("http://localhost:5000/send_email", {
        email,
        message,
        name
      }).then(() => sendSuccess())
      .catch(() => sendFailed());
      setError(false);
    } else {
      setError(true);
    }
  }

  const clearFields = () => {
    setName('');
    setEmail('');
    setMessage('');
  }
  
  const openMails = () => {
    setModal(true);
  }
  
  return (
    <>
      <div id='contact' data-aos="zoom-in-right">
        <div className="contact-container">
          <div className="contact-header-container">
            <h1>Contact</h1>
          <div className="header-border"></div>

          </div>
          <div className="contact-credentials">
            <input className="contact-input name" type="text" placeholder='Name' value={name} onChange={({target: {value}}) => setName(value)}/><br />
            <input className="contact-input email" type="email" placeholder='Email' value={email} onChange={({target: {value}}) => setEmail(value)}/>
          </div>
          <div>
            <textarea className="contact-input message" name="" id="" cols="30" rows="10" placeholder='Message' value={message} onChange={({target: {value}}) => setMessage(value)}></textarea>
            {error ? <p className='error-msg'>Please fill in all the input fields</p> : <p></p>}
          </div>
          <div className='contact-action'>
            <button onClick={sendEmail} className="contact-btn success">Send</button>
            <button className="contact-btn danger" onClick={clearFields}>Clear</button>
          </div>
          <div className="contact-medias">
            <div className='media-container'>
              <button onClick={openMails} className="mail-button">
                <i className="fa-solid fa-envelope"></i>
              </button>
            </div>
            <div className='media-container'>
              <a href="https://github.com/wliu1211"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className='media-container'>
              <a href="https://www.linkedin.com/in/will-liu-5b1142210/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Mail Accounts" isOpen={modal} close={setModal}>
        <div className="account-container">
          <div className="account-item-wrapper">
            <i className="fa-brands fa-google"></i>
            <p>willliu2001@gmail.com</p>
          </div>
          <div className="account-item-wrapper">
            <i className="fa-brands fa-microsoft"></i>
            <p>wliu684@outlook.com</p>
          </div>

        </div>
      </Modal>

    </>
  )
}

export default Contact