import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imgs/logo.webp";
import "../taha.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faCircleUser,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="">
        <Navbar.Brand href="">
          <div className="image imglogo">
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="m-auto">
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/home"
            >
              home
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/about"
            >
              about
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/skills"
            >
              skills
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/projects"
            >
              projects
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/contact"
            >
              contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="icons bg-success">
          <Link></Link>
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faAddressCard} />
          <FontAwesomeIcon icon={faAward} />
          <FontAwesomeIcon icon={faCircleUser} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
