import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imgs/logo.webp";
import "../taha.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faComment, faDiagramProject, faHouse, faServer, faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header h-100">
      <Navbar expand="lg" className="navbar ">
      <Container >
        <Navbar.Brand >
          <div className="image imglogo d-none d-lg-block">
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto d-lg-block d-none">
          <Nav className="m-auto">
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/home"
            >
              home
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/about"
            >
              about me
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/skills"
            >
              skills
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/projects"
            >
              projects
            </NavLink>
            <NavLink
              className="dark-c fs-4 fw-bold my-1 mx-1 py-2 px-4 rounded-pill text-capitalize text-decoration-none"
              to="/contact"
            >
              contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="icons d-block d-lg-none m-auto ">
          <Link className="fw-bold mx-1 i" to="/home">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link className="fw-bold mx-1 i"  to="/about">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link className="fw-bold mx-1 i"  to="/services">
            <FontAwesomeIcon icon={faServer} />
          </Link>
          <Link className="fw-bold mx-1 i" to="/skills">
            <FontAwesomeIcon icon={faBookOpen} />
          </Link>
          <Link className="fw-bold mx-1 i"  to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
          </Link>
          <Link className="fw-bold mx-1 i"  to="/contact">
            <FontAwesomeIcon icon={faComment} />
          </Link>
        </div>
      </Container>
    </Navbar>
  </div>
  );
}

export default Header;
