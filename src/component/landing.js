import { Container } from "react-bootstrap";
import land from '../imgs/landing.gif'
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  return (
    <div  className='h-section landing'>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <div className="info" data-aos="fade-left" data-aos-duration='4000'>
          <p className=" fw-bold main-c  fs-3 mb-2 text-capitalize">Hello I'am</p>
          <h1 className="fw-bold main-c       my-4 text-capitalize">Taha AbdulRahman</h1>
          <p className=" fw-bold main-c  fs-4 my-4 text-capitalize">Front End Developer (React.JS)</p>
          <p className=" fw-bold white-c fs-3 mt-4 mb-5 text-capitalize">Hey I'm a Frontend developer, I can create Landing pages, Portfolios, special Single-page websites, Web Applications, E-Shops, and more kinds of websites</p>
          <div className="my-2 p-2 ">
            <NavLink  className='btntrans position-relative dark-c fs-4 fw-bold my-1 mx-2 py-3 px-5 text-capitalize text-decoration-none' to='/contact'>Contact Me</NavLink>
          </div>
          <br/>
          {/* <Button className="my-2">
          <a className="text-capitalize text-decoration-none dark-c fw-bold" download="/public/t">Dounload Resume</a>
          </Button> */}
        </div>
        <div className="image d-none d-md-block" data-aos="fade-right" data-aos-duration='4000'>
          <img src={land} alt="../imgs/landing.gif"/>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
