import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import menu from '../imgs/proj/menu.png'
import nmec from '../imgs/proj/nmec.png'
import portfolio from '../imgs/proj/portfolio.png'
import { Link } from 'react-router';
import { Helmet } from "react-helmet";

const Project = () => {
    const unsafeProps = {
    target: "_blank",
  };
  return (
    <div className='h-section bg1 projects '>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Container>
        <div className='title-section '  data-aos="fade-left"data-aos-duration='4000'>
          <p className='title white-c text-uppercase fw-bold text-center'>my works</p>
          <p className=' white-c text-uppercase fw-bold text-center'> My Journey of Growth Through Projects</p>
        </div>
        {/* Content Section  */}
        <Row>
          <Col className='my-1 my-md-0' xs="12" md="4" data-aos="zoom-in-up"data-aos-duration='4000'>
            <Link className='text-decoration-none ' to="https://tahaabdulrahman.github.io/NMEC/" target={unsafeProps}>
              <Card className='cardp white-c h-100'>
                <Card.Img variant="top" src={nmec} />
                <Card.Body>
                  <Card.Title className="text-uppercase bg1-c fw-bold fs-3">nmec</Card.Title>
                  <Card.Text>
                    <p className='text-uppercase fs-6 bg1-c'>html, css & js</p>
                    <span className='text-capitalize fs-6'>
                    The NMEC is the first of its kind in Egypt and the Arab world. It presents the full range of the richness and diversity of Egyptian civilization throughout.
                    </span>
                  </Card.Text>
                  <Button variant="primary">live dimo</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className='my-1 my-md-0' xs="12" md="4" data-aos="zoom-in-up"data-aos-duration='4000'>
            <Link className='text-decoration-none ' to="https://elsultan-2104a.web.app/" target={unsafeProps}>
              <Card className='cardp white-c h-100'>
                <Card.Img variant="top" src={menu} />
                <Card.Body>
                  <Card.Title className="text-uppercase bg1-c fw-bold fs-3">resturant menu <br/><span className="text-capitalize fw-bold fs-6">(menu)</span></Card.Title>
                  <Card.Text>
                    <p className='text-uppercase fs-6 bg1-c'>react.js</p> 
                    <span className='text-capitalize fs-6'>It contains all the current offers and available items with a picture of each item.</span> 
                  </Card.Text>
                  <Button variant="primary">live dimo</Button>  
                </Card.Body>
              </Card>
            </Link>
          </Col>
          
          <Col className='my-1 my-md-0' xs="12" md="4" data-aos="zoom-in-up"data-aos-duration='4000'>
            <Link className='text-decoration-none ' to="https://tahaabdulrahman.github.io/portfolio-template/" target={unsafeProps}>
              <Card className='cardp white-c h-100'>
                <Card.Img variant="top" src={portfolio} />
                <Card.Body>
                  <Card.Title className="text-uppercase bg1-c fw-bold fs-3">portfolio <br/><span className="text-capitalize fw-bold fs-6">(A personal website)</span></Card.Title>
                  <Card.Text>
                    <p className='text-uppercase fs-6 bg1-c'>html, css & js</p> 
                    <span className='text-capitalize fs-6'>A personal website containing a list of the work, skills, services provided, and methods of communication.</span>
                  </Card.Text>
                  <Button variant="primary">live dimo</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Project;
