import React from 'react';
import './Section.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

let link1 = "https://img.theculturetrip.com/768x432/wp-content/uploads/2018/10/coffee6.jpg";
let link2 = 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/10/coffee6.jpg';
let link3 = "https://img.theculturetrip.com/768x432/wp-content/uploads/2018/10/coffee6.jpg"

const section = (props =>{
    return <section data-aos='fade-left' className="section1">
        <div className="text-section">
            <h1>our shop</h1>
        </div>
        <div className="box-main">
        <div className="box-container">
            <img src={link1} alt="asd"></img>
        </div>
        <div className="box-container">
            <img src={link2} alt="asd"></img>
        </div>
        <div className="box-container">
            <img src={link3} alt="asd"></img>
        </div>
        </div>
    </section>
    
})

export default section;