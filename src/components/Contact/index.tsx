import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <section id='contact'>
            <div className='spicial-header'>
                <h1>Contact-Us</h1>
                <p>we are born to create</p>
            </div>

            <div className='contact'>
                <h2>Feel free to drob us a line at:</h2>
                <a href="mailto:ahmedmijdo2@gmail.com">Send me an email</a>
                <div className='icons'>
                    <FontAwesomeIcon className='contact-icons' icon={faFacebook} />
                    <FontAwesomeIcon className='contact-icons' icon={faYoutube} />
                    <FontAwesomeIcon className='contact-icons' icon={faTwitter} />
                </div>
            </div>
        </section>
    );
}

export default Contact;