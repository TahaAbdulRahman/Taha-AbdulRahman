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
    <div className='h-section skills bg1'>
      <Container>
        <div className='title-section py-2 mb-5 lh-lg'  data-aos="fade-left"data-aos-duration='4000'>
          {/* <p className='fs-1 white-c text-uppercase fw-bold text-center'>skills</p> */}
        </div>
        <Row>
          <Col  xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={html} alt='html'/>
              {/* <p className='white-c fs-1 text-capitalize'>html</p> */}
            </div>
          </Col >
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={css} alt='css'/>
              {/* <p className='white-c fs-1 text-capitalize'>css</p> */}
            </div>
          </Col>
          <Col  xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={javascript} alt='javascript'/>
              {/* <p className='white-c fs-1 text-capitalize'>javascript</p> */}
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={bootstrap} alt='bootstrap'/>
              {/* <p className='white-c fs-1 text-capitalize mt-4'>bootstrap</p> */}
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={react} alt='react'/>
              {/* <p className='white-c fs-1 text-capitalize'>react</p> */}
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={sass} alt='sass'/>
              {/* <p className='white-c fs-1 text-capitalize'>sass</p> */}
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={github} alt='github'/>
              {/* <p className='white-c fs-1 text-capitalize'>github</p> */}
            </div>
          </Col>
          <Col xs="4" md="3" data-aos="zoom-in-up"data-aos-duration='4000'>
            <div  className='image p-0 p-md-2 mx-1 mx-nd-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={commandline} alt='commandline'/>
              {/* <p className='white-c fs-1 text-capitalize'>commandline</p> */}
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Skills;
