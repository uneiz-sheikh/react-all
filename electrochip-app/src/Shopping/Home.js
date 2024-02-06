import React from 'react';
import banner from "./images/slider-img.jpg";
import bann from "./images/about-img1.jpg";
import Footer from './Footer';


function Home() {
  return (
    <>

        <section id='banner'>
            <div className='Banner_container'>
              <div className='col-1'>
                <div className='banner_content'>
                  <h1>Electrical <br></br> Service <br></br> Provider</h1>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                  </p>

                  <button type='button' className='btn-1'>Apply Now</button>
                </div>                    
              </div>
              <div className='col-2'>
                <div className='banner_image'>
                  <img src={banner}/>  
                  <div className='banner_img2'>
                    <img src={bann} />
                  </div>                
                </div>                                   
              </div>
            </div>
        </section>  

        
        <Footer></Footer>

    </>     
  )
}

export default Home;
