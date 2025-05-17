import { Container } from 'react-bootstrap';
import about from '../imgs/about.svg'
import { NavLink } from "react-router-dom";
import '../taha.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';
const About = () => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  return (
    <div className='h-section about bg2'>
      <Container className='h-100 '>
        <div className='title-section py-3 lh-lg'>
          <p className='fs-1 white-c text-uppercase fw-bold text-center'>about me</p>
        </div>
        <div className='d-flex align-items-center justify-content-around'>
          <div className="image d-none d-md-block" data-aos="fade-left"data-aos-duration='4000'>
            <img src={about} alt="../imgs/landing.gif"/>
          </div>
          <div className='info' data-aos="fade-right" data-aos-duration='4000'>
            <p className='white-c text-capitalize fw-bold position-relative py-2 px-3 my-3 mx-2'>name : taha abdulrahman</p>
            <p className='white-c text-capitalize fw-bold position-relative py-2 px-3 my-3 mx-2'>front-end developer. I love crafting user-friendly interfaces and bringing designs to life through programming. With an eye for detail and dedication to creating seamless user experiences, I strive to deliver high-quality and innovative solutions. Explore my portfolio to see some of my projects and feel free to reach out for collaborations or opportunities</p>
            <p className='white-c                 fw-bold position-relative py-2 px-3 my-3 mx-2'><span className='text-capitalize'>email</span> : tahaabdelrahman487@gmail.com</p>
            <p className='white-c text-capitalize fw-bold position-relative py-2 px-3 my-3 mx-2'>age : 27</p>
            <p className='white-c text-capitalize fw-bold position-relative py-2 px-3 my-3 mx-2'>adrress : Egypt</p>
            <div className="my-5 p-2 ">
              <NavLink  className='btntrans position-relative dark-c fs-4 fw-bold my-1 mx-0 py-3 px-5 text-capitalize text-decoration-none' to='/contact'>Contact Me</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
