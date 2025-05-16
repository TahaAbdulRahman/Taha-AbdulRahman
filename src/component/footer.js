import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const unsafeProps = {
    target: "_blank",
  };

  return (
    <div className="navbar">
      <Container>
        <div className="text dark-c m-auto fs-4 fw-bold">
          <p className="m-auto">Made By Taha Abdulrahmman ©2024</p>
        </div>
        <div className="m-auto">
          <Link
            className="icon fs-2 mx-2 dark-c"
            target={unsafeProps}
            to="https://web.facebook.com/people/Ta-Ha/pfbid02YV1V98syqFaxBKPGTAk9u9TQzAzZu738s47gGHjqxLKZLgfRVSb9fySLCiq3yq9kl/"
            target={unsafeProps}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <a
            className="icon fs-2 mx-2 dark-c"
            href="https://www.instagram.com/taha_abdulrahmman/"
            target={unsafeProps}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="icon fs-2 mx-2 dark-c"
            href="https://github.com/TahaAbdulRahman?tab=repositories"
            target={unsafeProps}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon fs-2 mx-2 dark-c"
            href="https://wsend.co/201019893766"
            target={unsafeProps}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            className="icon fs-2 mx-2 dark-c"
            href="https://www.linkedin.com/authwall?trkInfo=AQEG_JBP7kXIFAAAAZbaxh24b2tWucb7BRZNajFF2SpD0JqJvjo5AhoB4kitgBrDG2i0fB2LbeBec5ntOVX9V_gO387AD3Eu04FEfHBvCGFwtF-4eLTq5MwESrbzgyBKm1I4uiM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftaha-abdulrahman%2F"
            target={unsafeProps}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
