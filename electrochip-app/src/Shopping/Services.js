import React from 'react';
import icon from './images/plug.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import Footer from './Footer';

function Services() {
  return (
    <>
        <section id='Services'>
            <div className='head'>
              <h2>Our Services</h2>
              <img className='icon' src={icon} />
            </div>
            <div className='container'>  
              <div className='card_wrapper'>

                <div className='ser_col'>
                  <div className='card'>
                    <img src={s1} />
                    <h4>Equipment installation</h4>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                  </div>                  
                </div>

                <div className='ser_col'>
                  <div className='card active'>
                    <img src={s2} />
                    <h4>Windmill Energy</h4>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>                    
                  </div>                  
                </div>

                <div className='ser_col'>
                  <div className='card'>
                    <img src={s3} />
                    <h4>Equipment Maintenance</h4>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                  </div>                  
                </div>

                <div className='ser_col'>
                  <div className='card'>
                    <img src={s4} />
                    <h4>Offshore Engineering</h4>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                  </div>                  
                </div>

                <div className='ser_col'>
                  <div className='card'>
                    <img src={s5} />
                    <h4>Electrical Wiring</h4>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                  </div>                  
                </div>

              </div>                  
                           
            </div>
        </section>

        <Footer></Footer>
    </>
  )
}

export default Services;