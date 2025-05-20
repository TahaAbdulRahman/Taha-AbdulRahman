import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import logo from "../imgs/contact.webp";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_er4vbff", "template_4wcv49w", form.current, {
        publicKey: "gn5U7Aws_CzlHviR9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    Swal.fire({
      title: "Thank You For Writing To Me",
      text: " We Will Respond As Soon ",
      icon: "success",
    });
  };

  return (
    <div className=" h-section contact-me bg2 overview-hidden" id="contact">
      <Container className="">
        <div className='title-section'  data-aos="fade-left"data-aos-duration='4000'>
          <p className='title white-c text-uppercase fw-bold text-center'>contact me</p>
          <p className=' white-c text-uppercase fw-bold text-center'> send me a massage now</p>
        </div>
        {/* Content Section  */}
        <Row className="bg1">
          <Col xs="12" lg="5">
            <div className="info text-center ">
              <div className=" w-100 white-c fs-4 mt-3">
                <img
                  className="w-50 rounded-circle"
                  src={logo}
                  alt="Animated blue email in front of flowers"
                  loading="lazy"
                />
                <p className="c-white text-capitalize">
                  If You Have a Question, Or Just Want To Get In Touch, Use this
                  form.
                </p>
                <p className="c-white text-capitalize">
                  {" "}
                  I`m looking Forward to Hearing From You.
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="7">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="form"
              className="p-3 d-flex align-items-center justify-content-center flex-column bg-p"
            >
              <div className="text-center mb-4">
                <h2 className="fw-bold white-c text-capitalize fs-2">
                  Talk to me
                </h2>
              </div>
              <div className="w-100 ">
                <input
                  className="w-100 p-2 py-2 px-4 border-0 my-2 my-lg-3"
                  name="user_name"
                  type="text"
                  id="name"
                  placeholder="Insert Your Name"
                  required
                />
              </div>
              <div className="w-100">
                <input
                  className="email w-100 py-2 px-4 border-0 rad-10 my-2 my-lg-4"
                  name="user_email"
                  type="email"
                  id="email"
                  placeholder="jhjkjk@gmail.com"
                  required
                />
              </div>
              <div className="w-100">
                <textarea
                  className="massege w-100 py-4 px-4 border-0 rad-10 my-4 my-lg-4"
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                  required
                ></textarea>
              </div>
              <div className="submit pb-1">
                <button
                  className="btn btn-success fw-bold px-3 fs-4"
                  id="button"
                  name="button"
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
