import React from 'react';
import icon from './images/plug.png';
import Footer from './Footer';

function Contact() {
  return (
    <>
        <section id='contact_sec'>
          <div className='container'>
            <div className='con_col'>
              <div className='head'>
                <h2>Contact Us</h2>
                <img className='icon' src={icon} />
              </div>
           
              <form className='form'>

                <div className='field_wrapper'>
                  <input type='text' placeholder='Name' />
                </div>  
                <div className='field_wrapper'>
                  <input type='email' placeholder='Email' />
                </div> 
                <div className='field_wrapper'>
                  <input type='text' placeholder='Phone Number' />
                </div>

                <textarea rows={3} cols={20} placeholder='Address' ></textarea>
                
                <input type='submit' className='s_btn' value="Submit"/>

              </form>
            </div>
            <div className='con_col'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55658389702!2d75.78144878009093!3d22.724109980872107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1705724996728!5m2!1sen!2sin" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>            
        </section>

        <Footer></Footer>
    </>    
  )
}

export default Contact;