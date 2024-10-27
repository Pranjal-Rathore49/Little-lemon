import React from "react";
import logo from '../images/Logo .svg'
const Footer = ()=>{
    return(
    <footer>
    <section>
        <div className="company-info">
            <img src={logo} alt=""/>
            <p>We are family owned Mediterraneran restaurant,focused
            on traditional reciepe served with modern twist</p>
        </div>
        <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservation</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address:<br/>123 Towncity,India</li>
                <li>Phone:<br/>+91 9856317845</li>
                <li>E-Mail:<br/>Little@lemon.com</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
                
            </ul>
            </div>
    </section>

    </footer>
    
    );
};

export default  Footer;
