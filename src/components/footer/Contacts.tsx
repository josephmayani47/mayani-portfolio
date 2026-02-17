import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  const contacts= [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joseph-mayani-766528286/', icon: icon(faLinkedin) },
    { name: 'GitHub', link: 'https://github.com/josephmayani47' , icon: icon(faGithub) },
    { name: 'Twitter', link: 'https://twitter.com/josephmayani' , icon: icon(faTwitter) },
    { name: 'Instagram', link: 'https://www.instagram.com/josephmayani47/', icon: icon(faInstagram) },
    { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61578309524363', icon: icon(faFacebook) }, 
    { name: 'WhatsApp', link: 'https://wa.me/255710289136' , icon: icon(faWhatsapp)}];
    
  return (
    <div className="contacts" id="contacts">
      <div className="row">
        <div className="col">
          <h2 id="coffee">Lets Talk over Coffee <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></h2>
          <p>Joseph Mayani</p>
          <p>Software Engineer | AI & Web Development</p>
          <div className="paragraph">
            <p>It is in my greatest desire to do work with YOU, I truly hope our Journey will be wonderful</p>
          </div>
          <ul className="contact-list">
            {contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.icon && <FontAwesomeIcon icon={contact.icon} style={{color:"red"}} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col" id="contact-info">
          <h3 id="contact-title">Contact Information</h3>
          <p>Email: <a href="mailto:josephmayani2001@gmail.com">josephmayani2001@gmail.com</a></p>
          <p>Phone: <a href="tel:+255710289136">+255 719 989 136</a></p>
          <p>Address: Dar es Salaam, Tanzania</p>
        </div>

        <div className="col">
          <h3 id="services">Services</h3>
          <ul className="contact-services">
            <li className="contact-s">Web Development</li>
            <li className="contact-s">AI & Machine Learning</li>
            <li className="contact-s">Data Analysis</li>
            <li className="contact-s">Mobile App Development</li>
            <li className="contact-s">Technical Consulting</li>
          </ul>
        </div>                       

          <div className="col">
             <h3 id="pages">Pages</h3>
              <ul className="contact-pages">
                <li className="contact-p"><a href="#about">About</a></li>
                <li className="contact-p"><a href="#skills">Skills</a></li>
                <li className="contact-p"><a href="#projects">Projects</a></li>
                <li className="contact-p"><a href="#contacts">Contacts</a></li>
                <li className="contact-p"><a href="#home">Home</a></li>
              </ul>
        </div>

        <div className="copyright">
          <p>&copy; 2024 Joseph Mayani. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
