import { Container } from 'react-bootstrap';
import contact from '../imgs/contact.webp'
import { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router';
const ContactUs  = () => {
  // let userInpet = document.getElementById('name')
  // let emailInpet = document.getElementById('email')
  // let massageInpet = document.getElementById('massage')
  // Start Email.JS
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_1xdxlh9', 'template_7rm36ip', form.current, {
      publicKey: 'wyRby0Kzn1_Wbfh7G',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    // if(userInpet.value !== "" && emailInpet.value !== "" && massageInpet.value !== "" ){
    //   console.log("valid")
    // }
  };
  // End Email.JS

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log('Form submitted without reloading the page');
  }
  const unsafeProps = {
    target: "_blank",
  };
  return (
    <div  className='h-section bg1 contact-me'>
      <Container>
        <div className='title-section '  data-aos="fade-left"data-aos-duration='4000'>
          <p className='title white-c text-uppercase fw-bold text-center'>contact me</p>
          <p className='white-c text-uppercase fw-bold text-center'> send me massage now</p>
        </div>
        <div>
          <div className='d-flex justify-content-around align-items-center flex-column flex-md-row'> 
            <div className='image p-3 d-flex justify-content-around align-items-center flex-column'>
              <img className=' w-75 rounded-circle' src={contact} alt='contact me'/>
              <p className='fs-3 my-3 text-capitalize white-c fw-bold'>
                If You Have a Question, Or Just Want To Get In Touch, Use this form.I`m looking Forward to Hearing From You.
              </p>
            </div>
            <div className='info ms-0 ms-md-4 d-flex justify-content-around align-items-center flex-column my-2'>
              <h2 className='text-center main-c fw-bold text-capitalize'>talke to me</h2>
              <form ref={form} onSubmit={sendEmail}  className='w-100 d-flex justify-content-around align-items-center flex-column'>
                <input id='name' name="user_name" placeholder='insert your name' type='text' className='w-100 px-3 py-1 rounded fs-4 mx-3 my-3 mt-5 text-capitalize' />
                <input id='email' name="user_email" placeholder='youremail@gmail.com' type='text' className='w-100 px-3 py-1 rounded fs-4 mx-3 my-3'  />
                <label>Message</label>
                <textarea id='massage'name="message"  placeholder='erite your massage'   className='w-100 px-3 py-1 rounded fs-4 mx-3 my-3 text-capitalize'/>
                <Link
                  onClick={handleSubmit}
                  className="icon fs-2 mx-2 dark-c"
                  to="https://github.com/TahaAbdulRahman?tab=repositories"
                  target={unsafeProps}
                >ssssssssssssssssssssssssss</Link>
                <input onClick={handleSubmit} type="submit" value="Send" className=' text-center bg-success fs-3 py-2 px-4 fw-bold text-capitalize' />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs ;
