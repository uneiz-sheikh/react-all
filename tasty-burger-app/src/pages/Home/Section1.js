import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import Burger from '../../Food_Assets/assets/hero/hero-2.png'
import { Link } from 'react-router-dom';


function Section1() {
  return (
    <section className='banner_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={7} className='mb-5 mb-lg-0'>
                  <div className='position-relative'>
                    <img src={Burger} className='img-fluid' alt='banner' />
                    <div className='price_badge'>
                      <div className='badge_text'>
                        <h4 className='h4_xs'>Only</h4>
                        <h4 className='h3_lg'>$6.99</h4>
                      </div>
                    </div>
                  </div>                    
                </Col>
                <Col lg={5}>
                  <div className='banner_cont text-center animate__animated animate__backInRight animate__delay-1s'>
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white'>With Onion</h2>
                    <p className='text-white pt-2 pb-4'>
                    Feugiat primis ligula risus auctor laoreet augue egestas mauris
                    viverra tortor in iaculis pretium at magna mauris ipsum primis
                    rhoncus feugiat
                    </p>
                    <Link to='/' className='btn order_now'>Order Now</Link>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1