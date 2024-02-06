import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Footer() {
  // Scroll State

  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const listenToScroll = () => {
    let heightToHodden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHodden ? setIsVisible(true) : setIsVisible(false);    
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  



  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to='tel:7869184038' className='calling'>7869184038</Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-youtube'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li>
                  <Link to='/'>
                    © 2023 <span>Pixel Perfect Tecnology</span>. All Rights Reserved
                  </Link>
                </li>
                <li>
                  <Link to='/'>About Us</Link>
                </li>
                <li>
                  <Link to='/'>Terms Of Use</Link>
                </li>
                <li>
                  <Link to='/'>Privacy Policy</Link>
                </li>               
                
              </ul>
            </div>
          </Row>
        </Container>
      </footer>

      {/* Scroll Top */}

      {isVisible && (
        <div className='scroll_top' onClick={scrollTop}>
          <i className='bi bi-arrow-up'></i>
        </div>
      )}

      
    </>   
  )
}

export default Footer;