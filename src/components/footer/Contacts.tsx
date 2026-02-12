 import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 const Contacts = () => {
  const contacts= [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joseph-mayani-766528286/', icon: icon(faLinkedin) },
    { name: 'GitHub', link: 'josephmayani' , icon: icon(faGithub) },
    { name: 'Twitter', link: 'https://twitter.com/josephmayani' , icon: icon(faTwitter) },
    { name: 'Instagram', link: 'https://www.instagram.com/josephmayani47/', icon: icon(faInstagram) },
    { name: 'Facebook', link: 'https://www.facebook.com/joseph.mayani.1', icon: icon(faFacebook) }, 
    { name: 'WhatsApp', link: 'https://wa.me/255710289136' , icon: icon(faWhatsapp)}];
    
  return (
    <div className="contacts" id="contacts">
      <h2 id="coffee">Lets Talk over Coffee <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></h2>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.icon && <FontAwesomeIcon icon={contact.icon} />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Contacts;
