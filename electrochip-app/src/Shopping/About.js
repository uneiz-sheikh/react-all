import React from 'react';
import about from "./images/about-img1.jpg";
import about2 from "./images/about-img2.jpg";
import icon from "./images/plug.png"
import Footer from './Footer';

function About() {
  return (
    <>
      <section id='about'>
        <div className='container'>
          <div className='col-1'>
            <div className='banner_content'>
              <div className='head2'>
                <h2>About Us</h2>
                <img className='icon' src={icon} />
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              </p>

              <button type='button' className='btn-1'>Read More</button>
            </div>                    
          </div>
          <div className='col-2'>
            <div className='about_image'>
              <img src={about}/>  
              <div className='about_img2'>
                <img src={about2} />
              </div>                
            </div>                                   
          </div>
        </div>
      </section>  

      <Footer></Footer>

    </>
  )
}

export default About;