import { Button, Container } from 'react-bootstrap';
import contact from '../imgs/contact.webp'
const Contact = () => {
  return (
    <div  className='h-section bg1 contact-me'>
      <Container>
        <div className='title-section py-2 lh-lg' data-aos="fade-left"data-aos-duration='4000'>
          <p className='fs-1 white-c text-uppercase fw-bold text-center'>contact me</p>
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
              <input className='w-75 px-3 py-1 rounded fs-4 mx-3 my-3 mt-5 text-capitalize' placeholder='insert your name' type='text'/>
              <input className='w-75 px-3 py-1 rounded fs-4 mx-3 my-3' placeholder='youremail@gmail.com' type='text'/>
              <textarea className='w-75 px-3 py-1 rounded fs-4 mx-3 my-3 text-capitalize' placeholder='erite your massage'/>
              <div className='text-center '>
                <Button className='bg-success fs-3 py-2 px-4 fw-bold text-capitalize'>send</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
