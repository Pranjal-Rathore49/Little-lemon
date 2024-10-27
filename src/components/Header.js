import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'
const Header= () =>{
    return (
    <header className='header'>
        <section>
           <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are family owned Mediterraneran restaurant,focused
                on traditional reciepe served with modern twist </p>
           </div>
           <Link to ="/booking"><button aria-label="On Click">Reserve table </button></Link>
              <div className="banner-img">
                <img src={bannerImg} alt=''/>
              </div>
        </section>
    </header>
    );
}
export default Header; 