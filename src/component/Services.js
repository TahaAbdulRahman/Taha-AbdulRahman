import { faCreativeCommonsShare } from "@fortawesome/free-brands-svg-icons";
import {
  faFingerprint,
  faLaptopCode,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div className="h-section services bg1">
      <Container>
        <div
          className="title-section "
          data-aos="fade-left"
          data-aos-duration="4000"
        >
          <p className="title white-c text-uppercase fw-bold text-center">
            What do I Offer{" "}
          </p>
          <p className=" white-c text-uppercase fw-bold text-center"></p>
        </div>
        <Row>
          <Col className="my-3 my-md-0" xs="12" lg="6">
            <div className="p-4 m-2 bg2 rad-10 d-flex align-items-start justify-content-center flex-column white-c">
              <div className="i rounded-circle main-c fs-1 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faCreativeCommonsShare} />
              </div>
              <h2 className="mt-3 fw-bold">UI UX Design</h2>
              <p className="fs-5"> and Mobile application design</p>
            </div>
          </Col>
          <Col className="my-3 my-md-0" xs="12" lg="6">
            <div className="p-4 m-2 bg2 rad-10 d-flex align-items-start justify-content-center flex-column white-c">
              <div className="i rounded-circle main-c fs-1 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h2 className="mt-3 fw-bold">Web Development</h2>
              <p className="fs-5">Website for individuals & business</p>
            </div>
          </Col>
          <Col className="my-3 my-md-0" xs="12" lg="6">
            <div className="p-4 m-2 bg2 rad-10 d-flex align-items-start justify-content-center flex-column white-c">
              <div className="i rounded-circle main-c fs-1 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faObjectUngroup} />
              </div>
              <h2 className="mt-3 fw-bold">Graphic Design</h2>
              <p className="fs-5">Design with creativity and purpose</p>
            </div>
          </Col>
          <Col className="my-3 my-md-0" xs="12" lg="6">
            <div className="p-4 m-2 bg2 rad-10 d-flex align-items-start justify-content-center flex-column white-c">
              <div className="i rounded-circle main-c fs-1 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faFingerprint} />
              </div>
              <h2 className="mt-3 fw-bold">Brand Identity</h2>
              <p className="fs-5">Branding is the art of differentiation</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
