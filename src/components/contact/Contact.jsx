import "./contact.css"
import Phone from  "../../img/Phone.png"
import Email from  "../../img/Email.png"
import Address from  "../../img/Address.png"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const infoo = useRef()
    const submitt = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_uyhn6sk', 'template_owtdu5v', infoo, 'user_dC7qjuq0nSQdFfPSWQwFW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="contact">
            <div className="contact-left">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-description">
                    <p>You can get in touch with me via the form below.</p>
                </div>
                <form ref={infoo} onSubmit={submitt}>
                    <input type="text" placeholder="Name" name="from_name"/>
                    <input type="text" placeholder="Subject" name="mail_subject"/>
                    <input type="text" placeholder="Email" name="sender_email"/>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                </form>
                {/* <div className="intro-left-container">
                    <h2 className="intro-intro">Hello! My name is</h2>
                    <h1 className="intro-name">Emre Akca </h1>
                    <div className="intro-slider">
                        <div className="intro-slider-container">
                            <div className="intro-slider-slide">Computer</div>
                            <div className="intro-slider-slide">Science</div>
                            <div className="intro-slider-slide">Student</div>
                        </div>
                    </div>
                    <div className="intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    {/* <div className="intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> */}
            </div>
            <div className="contact-right">
                {/* right */}
                <div className="contact-info">
                    <div className="contact-info-name">
                        <img src={Phone} alt="" className="contact-icon"></img>
                        <div className="monke"><p>+90 536 658 8993</p></div>
                        {/* <br></br> */}
                    </div>
                    <div className="contact-info-name">
                        <img src={Email} alt="" className="contact-icon"></img>
                        <div className="monke"><p>eakca21@ ku.edu.tr</p></div>
                        {/* <br></br> */}
                    </div>
                    <div className="contact-info-name">
                        <div className="switch"><img src={Address} alt="" className="contact-icon"></img></div>
                        <div className="monke"><p>Koc University West Campus, Sariyer, Istanbul.</p></div>
                        
                        {/* <br></br> */}
                    </div>
                </div>
                <div className="contact-background"></div>
                {/* <img src={Me} alt="" className="intro-img"></img> */}
            </div>
        </div>
    )
}

export default Contact