import { Button, Container } from "react-bootstrap";
import land from '../imgs/landing.gif'
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div  className='h-section header bg1'>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <div className="info">
          <p className="fw-bold main-c fs-3 mb-2  text-capitalize">Hello I'am</p>
          <h1 className="fw-bold main-c my-3 text-capitalize">Taha AbdulRahman</h1>
          <p className="fw-bold main-c fs-5 my-3 text-capitalize">Front End Developer (React.JS)</p>
          <p className="fs-4 white-c fw-bold my-3 text-capitalize">Hey I'm a Frontend developer, I can create Landing pages, Portfolios, special Single-page websites, Web Applications, E-Shops, and more kinds of websites</p>
          <Button className="my-2">
            <NavLink  className='dark-c fs-4 fw-bold my-1 mx-2 py-2 px-4 rounded-pill text-capitalize text-decoration-none' to='/contact'>Contact Me</NavLink>
          </Button>
          <br/>
          {/* <Button className="my-2">
          <a className="text-capitalize text-decoration-none dark-c fw-bold" download="/public/t">Dounload Resume</a>
          </Button> */}
        </div>
        <div className="image d-none d-md-block">
          <img src={land} alt="../imgs/landing.gif"/>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
