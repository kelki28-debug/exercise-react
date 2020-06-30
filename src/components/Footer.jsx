import React from 'react';
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const footer = (props =>{
    return  <div data-aos='fade-right'><h1 className="h1-footer">find us</h1>
    <footer className="footer">
        <div className="footer-text">
           <ul>
               <li>menu</li>
               <li>menu</li>
               <li>menu</li>
               <li>menu</li>
           </ul>
        </div>
        <div className="footer-box">
            <img src="https://miro.medium.com/max/3140/1*9OQhrO9KuIrJT95lQqtx4g.png" alt=""></img>
        </div>
    </footer>
    </div>
})

export default footer;