
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Shopping/Home";
import About from "./Shopping/About";
import Blog from "./Shopping/Blog";
import Contact from "./Shopping/Contact";
import Services from "./Shopping/Services";
import logo from "./Shopping/images/logo.png";
import "./App.css";

export default function App() {

  const [show,setShow] = useState(false);

  const openMenu = ()=>{
    setShow(!show);
  }

  return (
    <Router>
      <div>
        <div className="nav">
        
          <nav className="navbar">
            <div className="logo">
              <img src={logo}/>
              <Link to="/">Electrochip</Link>
            </div>
            <div className="menu" onClick={openMenu}>
              <i className="fa-solid fa-bars menu_btn"></i>
            </div>
            <ul className={`navbar_nav ${show === true ? 'active' : ''}`}>
              <li>
                <Link to="/" className="active">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}