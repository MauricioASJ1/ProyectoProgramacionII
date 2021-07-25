import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './footer.css'
function Footer(){
    
        return(
            <div className="footer-container">
                <div className="top">Contactenos<br/>correo@correo.com</div>
                <div className="bot">Dev-bms</div>
                <div className="bot-icon"><a href="https://www.facebook.com"><i class="fab fa-instagram" ></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-tiktok"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
                </div>
            </div>
        )
    
    
}
export default Footer;