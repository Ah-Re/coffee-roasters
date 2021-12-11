import React, { useEffect } from 'react';
import Navbar from "../Home/Navbar/Navbar";
import "./About.css";
import WhiteCup from "../../assets/about/mobile/image-hero-whitecup.jpg";
import CoffeeMan from "../../assets/about/mobile/image-commitment.jpg";
import QualityCup from "../../assets/about/mobile/image-quality.jpg";
import QualityCupTablet from "../../assets/about/tablet/image-quality.jpg";
import QualityCupDesktop from "../../assets/about/desktop/image-quality.jpg";
import UK from "../../assets/about/desktop/illustration-uk.svg";
import Canada from "../../assets/about/desktop/illustration-canada.svg";
import Australia from "../../assets/about/desktop/illustration-australia.svg";
import LogoDark from "../../assets/shared/desktop/logo-dark.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import WhiteCupTablet from "../../assets/about/tablet/image-hero-whitecup.jpg";
import CoffeeManTablet from "../../assets/about/tablet/image-commitment.jpg";
import CoffeeManDesktop from "../../assets/about/desktop/image-commitment.jpg";
import { Link } from "react-router-dom";


const About = (props) => {

  // const whiteCupUrl = props.useWindowWidth() >= 650 ? WhiteCupTablet : WhiteCup;
  // const coffeeManUrl = props.useWindowWidth() >= 650 ? CoffeeManTablet : CoffeeMan;
  let window = props.useWindowWidth();
  const coffeeManUrl = window > 800 ? CoffeeManDesktop : (window >= 650 ? CoffeeManTablet : CoffeeMan);




  

    return (
        <div className="about">
             <Navbar />
             <div className="white-cup-wrapper">
        {/* <img className="white-cup" src={whiteCupUrl} alt="white-cup" /> */}
    <div className="white-cup-text">
  <h2>About Us</h2>
  <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
  coffee from around the world. We have since been dedicated to bring the perfect cup - from 
  bean to brew - in every shipment.</p>
  </div>
  </div>

  <div className="coffee-man-wrapper">
  <picture>
  <source media="(min-width: 800px)" srcset={CoffeeManDesktop}/>
  <source media="(min-width: 750px)" srcset={CoffeeManTablet}/>
  <img className="coffee-man" src={CoffeeMan}  alt="coffee-man" />
  </picture>
  <div className="commitment">
  <h2>Our commitment</h2>
  <p>We’re built on a simple mission and a commitment to doing good along the way. We want to 
  make it easy for you to discover and brew the world’s best coffee at home. It all starts 
  at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
  a year trying to understand the challenges and opportunities in each of these places.
  We collaborate with exceptional coffee growers and empower a global community of farmers 
  through with well above fair-trade benchmarks. We also offer training, support farm community 
  initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
  each lot to highlight tasting profiles distinctive to their native growing region.</p>
  </div>
  </div>
  
  <div className="quality">
  <h2>Uncompromising quality</h2>
  <p>Although we work with growers who pay close attention to all stages of harvest and processing, 
  we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
  coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
  consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
  <picture>
  <source media="(min-width: 800px)" srcset={QualityCupDesktop}/>
  <source media="(min-width: 650px)" srcset={QualityCupTablet}/>
  <img className="quality-cup" src={QualityCup} alt="quality-cup" />
  </picture>
</div>

<div className="headquarters">
  <h3>Our headquarters</h3>

<div className="country-wrapper">
<div className="country-info">
  <img className="country-image" src={UK} alt="UK" />
  <h2>United Kingdom</h2>
  <p>68 Asfordby Rd</p>
  <p>Alcaston</p>
  <p>SY6 1YA</p>
  <p>+44 1241 918425</p>
</div>

<div className="country-info">
  <img className="country-image" src={Canada} alt="Canada" />
  <h2>Canada</h2>
  <p>1528 Eglinton Avenue</p>
  <p>Toronto</p>
  <p>Ontario M4P 1A6</p>
  <p>+1 416 485 2997</p>
</div>

<div className="country-info">
  <img className="country-image" src={Australia} alt="Australia" />
  <h2>Australia</h2>
  <p>36 Swanston Street</p>
  <p>Kewell</p>
  <p>Victoria</p>
  <p>+61 4 9928 3629</p>
  </div>
  </div>
</div>

<div className="about-footer">
<img className="logo-dark" src={LogoDark} alt="logo-dark" />
<Link className="about-nav-links" to="/">Home</Link>
<Link className="about-nav-links" to="/about">About us</Link>
<Link className="about-nav-links" to="/plan">Create your plan</Link>
  <div className="social-media-icons">
  <img className="social-media" src={Facebook} alt="facebook" />
  <img className="social-media twitter" src={Twitter} alt="facebook" />
  <img className="social-media" src={Instagram} alt="facebook" />
  </div>

  </div>
        </div>
    )
}

export default About;
