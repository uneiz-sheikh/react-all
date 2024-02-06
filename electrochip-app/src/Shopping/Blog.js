import React from 'react';
import blog from './images/blog1.jpg';
import blog2 from './images/blog2.jpg';
import icon from './images/plug.png';
import Footer from './Footer';

function Blog() {
  return (
    <>

        <section id='blog'>
            <div className='head'>
                <h2>Blog</h2>
                <img className='icon' src={icon} />
            </div>
            <div className='b_container'>                
                <div className='blog_col'>
                    <div className='blog_content'>
                        <div className='blog_img'>
                            <img src={blog} />
                            <div className='blog_detail'>
                                <h3>Blog Title Goes Here</h3>
                                <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className='blog_col'>
                    <div className='blog_content'>
                        <div className='blog_img'>
                            <img src={blog2} />
                            <div className='blog_detail'>
                                <h3>Blog Title Goes Here</h3>
                                <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>

    </>
  )
}

export default Blog;