import { Col, Container, Row } from 'react-bootstrap';
import html from '../imgs/skills/html.webp'
import css from '../imgs/skills/css.webp';
import javascript from '../imgs/skills/js.webp';
import bootstrap from '../imgs/skills/bootstrap.webp';
import react from '../imgs/skills/reactjs.webp';
import sass from '../imgs/skills/sass.svg';
import github from '../imgs/skills/github.webp';
import commandline from '../imgs/skills/commandline.webp';
import '../taha.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  
  return (
    <div className='h-section skills bg2'>
      <Container>
        <div className='title-section'  data-aos="fade-left"data-aos-duration='4000'>
          <p className='title white-c text-uppercase fw-bold text-center'>my skills</p>
          <p className=' white-c text-uppercase fw-bold text-center'> whate i do</p>
        </div>
        {/* Content Section  */}
        <Row>
          <Col  xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={html} alt='html'/>
            </div>
          </Col >
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={css} alt='css'/>
            </div>
          </Col>
          <Col  xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={javascript} alt='javascript'/>
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={bootstrap} alt='bootstrap'/>
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={react} alt='react'/>
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={sass} alt='sass'/>
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={github} alt='github'/>
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div  className='image p-0 p-md-2 mx-md-3 my-4 my-md-5 d-flex align-items-center justify-content-center flex-column'>
              <img src={commandline} alt='commandline'/>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Skills;
