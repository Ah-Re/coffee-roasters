import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar/Navbar";
import CoffeePress from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import GranEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import Planalto from "../../assets/home/desktop/image-planalto.png";
import Piccollo from "../../assets/home/desktop/image-piccollo.png";
import Danche from "../../assets/home/desktop/image-danche.png";
import CoffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import Gift from "../../assets/home/desktop/icon-gift.svg";
import Truck from "../../assets/home/desktop/icon-truck.svg";
import LogoDark from "../../assets/shared/desktop/logo-dark.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import CoffeePressTablet from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import CoffeePressDesktop from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import { useNavigate, Link } from "react-router-dom";


import "./Home.css";

const Home = (props) => {
  const navigate = useNavigate();
  // props.useWindowWidth() >= 650 ? CoffeePressTablet : CoffeePress;

  let imageUrl = CoffeePress; 
  
  if (props.useWindowWidth() > 650 && props.useWindowWidth <= 768) {
    imageUrl = CoffeePressTablet;
  } else if (props.useWindowWidth() < 650) {
    imageUrl = CoffeePress;
  } else {
    imageUrl = CoffeePressDesktop;
  }

  let useWindowWidth = props.useWindowWidth();





  return (
        <div className="home">
             <Navbar useWindowWidth={useWindowWidth}/>
             <div className="landing-image">
             {/* <img className="coffee-press" src={imageUrl} alt="coffee-press" /> */}

<div className="landing-image-text">
  <h1>Great coffee made simple.</h1>

  <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
  coffees from our best roasters delivered directly to your door, at your schedule.</p>

  <button onClick={() => {
    navigate('/plan')
  }}>Create your plan</button>
  </div>
</div>

<div className="collection">
  <h1>our collection</h1>

<div className="coffee-bags-section">
<div className="single-coffee-bag">
<img className="coffee-bag" src={GranEspresso} alt="gran-espresso" />
<div className="single-coffee-bag-text">
  <h2>Gran Espresso</h2>
  <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
  </div>
</div>

<div className="single-coffee-bag">
  <img className="coffee-bag" src={Planalto} alt="planalto" />
  <div className="single-coffee-bag-text">
  <h2>Planalto</h2>
  <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
  </div>
</div>

<div className="single-coffee-bag">
  <img className="coffee-bag" src={Piccollo} alt="piccollo" />
  <div className="single-coffee-bag-text">
  <h2>Piccollo</h2>
  <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
  </div>
</div>

<div className="single-coffee-bag">
  <img className="coffee-bag" src={Danche} alt="danche" />
  <div className="single-coffee-bag-text">
  <h2>Danche</h2>
  <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
  </div>
  </div>
</div>

</div>
<div className="sales-pitch-wrapper">
<div className="sales-pitch">
  <h1>Why choose us?</h1>

  <p>A large part of our role is choosing which particular coffees will be featured 
  in our range. This means working closely with the best coffee growers to give 
  you a more impactful experience on every level.</p>
</div>
<div className="sales-cards">

<div className="sales-card">
<img src={CoffeeBean} alt="coffee-bean" />
    <div className="sales-card-text">
  <h2>Best quality</h2>
  <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
  </div>
</div>

<div className="sales-card">
        <img src={Gift} alt="gift" />
        <div className="sales-card-text">
  <h2>Exclusive benefits</h2>
  <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
  </div>
</div>

<div className="sales-card">
<img src={Truck} alt="truck" />
<div className="sales-card-text">
  <h2>Free shipping </h2>
  <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
  </div>
  </div>

</div>
</div>
<div className="process">
  <h2 className="subtitle">How it works</h2>

<div className="timeline">
<span className="dot"></span>
<hr></hr>
<span className="dot"></span>
<hr></hr>
<span className="dot"></span>
</div>

<div className="steps">
<div>
  <h1>01</h1>
  <h2>Pick your coffee</h2>
  <p>Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.</p>
</div>

<div>
  <h1>02</h1>
  <h2>Choose the frequency</h2>
  <p>Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.</p>
</div>

<div>
  <h1>03</h1>
  <h2>Receive and enjoy!</h2>
  <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.</p>
  </div>
</div>
  <button onClick={() => {
    navigate('/plan')
  }}>Create your plan</button>
</div>
  
<div className="footer">
<img className="logo-dark" src={LogoDark} alt="logo-dark" />
  <Link className="home-nav-links" to="/">Home</Link>
  <Link className="home-nav-links" to="/about">About us</Link>
  <Link className="home-nav-links" to="/plan">Create your plan</Link>
  <div className="social-media-icons">
  {/* <img className="social-media" src={Facebook} alt="facebook" /> */}
  <svg className="social-media facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#FEFCF7" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
  <img className="social-media twitter" src={Twitter} alt="facebook" />
  <img className="social-media" src={Instagram} alt="facebook" />
  </div>
  </div>
        </div>
    )
}

export default Home
