import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar/Navbar";
import BlackCup from "../../assets/plan/mobile/image-hero-blackcup.jpg";
import ArrowIcon from "../../assets/plan/desktop/icon-arrow.svg";
import LogoDark from "../../assets/shared/desktop/logo-dark.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import BlackCupTablet from "../../assets/plan/tablet/image-hero-blackcup.jpg";
import { Link } from "react-router-dom";
import "./Plan.css";

const Plan = (props) => {

  console.log(props.useWindowWidth());

  const modalButtonText = props.useWindowWidth() < 751 ? "Checkout - $14.00 / mo" : "Checkout";
  // const imageUrl = props.useWindowWidth() >= 650 ? BlackCupTablet : BlackCup;

  const [questionOne, setQuestionOne] = useState(true);
  const [questionTwo, setQuestionTwo] = useState(true);
  const [questionThree, setQuestionThree] = useState(true);
  const [questionFour, setQuestionFour] = useState(true);
  const [questionFive, setQuestionFive] = useState(true);

  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");

  const [modal, setModal] = useState(false);

  const [disable, setDisable] = useState(true);

  const [answerBackground, setAnswerBackground] = useState({
    backgroundColor: "var(--cyan)",
    color: "var(--cream)",
    
  });

  const disabledStyle = {
    backgroundColor: "#E2DEDB",
    color: "#FEFCF7",
    pointerEvents: "none"
  }

  function checkForm() {
    if (answerOne  && answerTwo  && answerThree  && answerFour  && answerFive) {
      
      setDisable(false);
    } else {
      setDisable(true);
    }

    console.log("New Clicks");
    console.log("Answer One " + answerOne);
    console.log("Answer Two " + answerTwo);
    console.log("Answer Three " + answerThree);
    console.log("Answer Four " + answerFour);
    console.log("Answer Five " + answerFive);
    
  }

  useEffect(() => {
    checkForm();
  }, [answerOne, answerTwo, answerThree, answerFour, answerFive]);

    return (
        <div className="plan">
    <Navbar />

<div className="black-cup-wrapper">
    {/* <img className="black-cup" src={imageUrl} alt="black-cup" /> */}
    <div className="black-cup-text">
  <h1>Create a plan</h1>
  <p>Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door.</p>
  </div>
</div>

<div className="steps">

<div className="plan-timeline">
<span className="plan-dot"></span>
<span className="plan-dot"></span>
<span className="plan-dot"></span>
<hr></hr>
</div>

<div className="single-step-wrapper">
<div className="single-step">
  <h1>01</h1>
  <h2>Pick your coffee</h2>
  <p>Select from our evolving range of artisan coffees. Our beans are ethically
  sourced and we pay fair prices for them. There's new coffees in all profiles
  every month for you to try out.</p>
  </div>

<div className="single-step">
  <h1>02</h1>
  <h2>Choose the frequency</h2>
  <p>Customize your order frequency, quantity, even your roast style and grind type.
  Pause, skip or cancel your subscription with no commitment through our online portal.</p>
  </div>

<div className="single-step">
  <h1>03</h1>
  <h2>Receive and enjoy!</h2>
  <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
  world-class coffees curated to provide a distinct tasting experience.</p>
</div>
</div>



</div>
<div className="desktop-menu-wrapper">
<div className="coffee-quiz-menu">
  <a href="#question-one" onClick={() => {
    setQuestionOne(true);
  }} 
  style={questionOne ? {color: "var(--dark-blue)"} : {}}
  className="coffee-quiz-index"><span style={questionOne ? {color: "var(--cyan)"} : {}}className="quiz-number">01</span> Preferences</a>
  <hr></hr>
  <a href="#question-two" onClick={() => {
    setQuestionTwo(true);
  }} 
  style={questionTwo ? {color: "var(--dark-blue)"} : {}}
  className="coffee-quiz-index"><span style={questionTwo ? {color: "var(--cyan)"} : {}} className="quiz-number">02</span> Bean type</a>
  <hr></hr>
  <a href="#question-three" onClick={() => {
    setQuestionThree(true);
  }} 
  style={questionThree ? {color: "var(--dark-blue)"} : {}}
  className="coffee-quiz-index"><span style={questionThree ? {color: "var(--cyan)"} : {}} className="quiz-number">03</span> Quantity</a>
  <hr></hr>
  <a href="#question-four"onClick={() => {
    setQuestionFour(true);
  }} 
  style={questionFour ? {color: "var(--dark-blue)"} : {}}
  className="coffee-quiz-index"><span style={questionFour ? {color: "var(--cyan)"} : {}} className="quiz-number">04</span> Grind option</a>
  <hr></hr>
  <a href="#question-five" onClick={() => {
    setQuestionFive(true);
  }} 
  style={questionFive ? {color: "var(--dark-blue)"} : {}}
  className="coffee-quiz-index"><span style={questionFive ? {color: "var(--cyan)"} : {}} className="quiz-number">05</span> Deliveries</a>
  <hr></hr>
  </div>

<div>
<div className="coffee-quiz">
<div className="question">
<div id="question-one" onClick={() => {
  setQuestionOne(!questionOne);
  
}}>
  <h2>How do you drink your coffee?</h2>
  <img className="arrow-icon" style={ questionOne ? {transform: "rotate(180deg)"} : null} src={ArrowIcon} alt="arrow-icon" />
  </div>

{questionOne && 

  <div className="answer-wrapper">
<div 
style={answerOne === "Capsule" ? answerBackground : {}}
onClick={() => {
  if (answerOne === "Capsule") {
    setAnswerOne("");
    
  }
  else {
    setAnswerOne("Capsule");
    
  }

  
  
  
  
}} className="answer">
  <h2 style={answerOne === "Capsule" ? {color: "var(--cream)"} : {}}>Capsule</h2>
  <p>Compatible with Nespresso systems and similar brewers</p>
</div>



<div 
style={answerOne === "Filter" ? answerBackground : {}}
onClick={() => {
  if (answerOne === "Filter") {
    setAnswerOne("");
    
  }
  else {
    setAnswerOne("Filter");
    
  }

  
  

}} className="answer">
  <h2 style={answerOne === "Filter" ? {color: "var(--cream)"} : {}}>Filter</h2>
  <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
</div>


<div 
style={answerOne === "Espresso" ? answerBackground : {}}
onClick={() => {
  if (answerOne === "Espresso") {
    setAnswerOne("");
    
  }
  else {
    setAnswerOne("Espresso");
    
  }
  
  
}} className="answer">
  <h2 style={answerOne === "Espresso" ? {color: "var(--cream)"} : {}}>Espresso</h2>
  <p>Dense and finely ground beans for an intense, flavorful experience</p>
  </div>
  </div>
}


</div>

<div className="question">
<div id="question-two" onClick={() => {
  setQuestionTwo(!questionTwo);
}}>
  <h2>What type of coffee?</h2>
  <img className="arrow-icon" style={ questionTwo ? {transform: "rotate(180deg)"} : null} src={ArrowIcon} alt="arrow-icon" />
</div>

{questionTwo && 
  <div className="answer-wrapper">
  <div 
  style={answerTwo === "Single Origin" ? answerBackground : {}}
  onClick={() => {
    if (answerTwo === "Single Origin") {
      setAnswerTwo("");
      
    } else {
      setAnswerTwo("Single Origin");
      
    }
    
    
  }} className="answer">
  <h2 style={answerTwo === "Single Origin" ? {color: "var(--cream)"} : {}}>Single origin</h2>
  <p>Distinct, high quality coffee from a specific family-owned farm</p>
</div>

<div 
style={answerTwo === "Decaf" ? answerBackground : {}}
onClick={() => {
  if (answerTwo === "Decaf") {
    setAnswerTwo("");
    
  } else {
    setAnswerTwo("Decaf");
    
  }
  
  
}} className="answer">
  <h2 style={answerTwo === "Decaf" ? {color: "var(--cream)"} : {}}>Decaf</h2>
  <p>Just like regular coffee, except the caffeine has been removed</p>
</div>

<div 
style={answerTwo === "Blended" ? answerBackground : {}}
onClick={() => {
  if (answerTwo === "Blended") {
    setAnswerTwo("");
    
  } else {
    setAnswerTwo("Blended");
    
  }
  
  
}} className="answer">
  <h2 style={answerTwo === "Blended" ? {color: "var(--cream)"} : {}}>Blended</h2>
  <p>Combination of two or three dark roasted beans of organic coffees</p>
  </div>
  </div>
}

</div>

<div className="question">
<div id="question-three" onClick={() => {
  setQuestionThree(!questionThree);
}}>
  <h2>How much would you like?</h2>
  <img className="arrow-icon" style={ questionThree ? {transform: "rotate(180deg)"} : null} src={ArrowIcon} alt="arrow-icon" />
</div>

{questionThree && 
  <div className="answer-wrapper">
  <div 
  style={answerThree === "250g" ? answerBackground : {}}
  onClick={() => {
    if (answerThree === "250g") {
      setAnswerThree("");
      
    } else {
      setAnswerThree("250g");
      
    }
    
    
  }} className="answer">
  <h2 style={answerThree === "250g" ? {color: "var(--cream)"} : {}}>250g</h2>
  <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
  </div>

<div 
style={answerThree === "500g" ? answerBackground : {}}
onClick={() => {
  if (answerThree === "500g") {
    setAnswerThree("");
    
  } else {
    setAnswerThree("500g");
    
  }
  
  
}} className="answer">
  <h2 style={answerThree === "500g" ? {color: "var(--cream)"} : {}}>500g</h2>
  <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
</div>

<div 
style={answerThree === "1000g" ? answerBackground : {}}
onClick={() => {
  if (answerThree === "1000g") {
    setAnswerThree("");
    
  } else {
    setAnswerThree("1000g");
    
  }
  
  
}} className="answer">
  <h2 style={answerThree === "1000g" ? {color: "var(--cream)"} : {}}>1000g</h2>
  <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
</div>
</div>
}


</div>

<div className="question">
<div id="question-four" onClick={() => {
  setQuestionFour(!questionFour);
}}>
  <h2>Want us to grind them?</h2>
  <img className="arrow-icon" style={ questionFour ? {transform: "rotate(180deg)"} : null} src={ArrowIcon} alt="arrow-icon" />
</div>

{questionFour && 

  <div className="answer-wrapper">
<div 
style={answerFour === "Wholebean" ? answerBackground : {}}
onClick={() => {
  if (answerFour === "Wholebean") {
    setAnswerFour("");
    
  } else {
    setAnswerFour("Wholebean");
    
  }
  
  
}} className="answer">
  <h2 style={answerFour === "Wholebean" ? {color: "var(--cream)"} : {}}>Wholebean</h2>
  <p>Best choice if you cherish the full sensory experience</p>
</div>

<div 
style={answerFour === "Filter" ? answerBackground : {}}
onClick={() => {
  if (answerFour === "Filter") {
    setAnswerFour("");
    
  } else {
    setAnswerFour("Filter");
    
  }
  
  
}} className="answer">
  <h2 style={answerFour === "Filter" ? {color: "var(--cream)"} : {}}>Filter</h2>
  <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
</div>

<div 
style={answerFour === "Cafetiére" ? answerBackground : {}}
onClick={() => {
  if (answerFour === "Cafetiére") {
    setAnswerFour("");
    
  } else {
    setAnswerFour("Cafetiére");
    
  }
 
  
}} className="answer">
  <h2 style={answerFour === "Cafetiére" ? {color: "var(--cream)"} : {}}>Cafetiére</h2>
  <p>Course ground beans specially suited for french press coffee</p>
</div>

</div>
}



</div>

<div className="question">
<div id="question-five" onClick={() => {
  setQuestionFive(!questionFive);
  
}}>
  <h2>How often should we deliver?</h2>
  <img className="arrow-icon" style={ questionFive ? {transform: "rotate(180deg)"} : null} src={ArrowIcon} alt="arrow-icon" />
</div>

{questionFive && 

  <div className="answer-wrapper">
<div 
style={answerFive === "every week" ? answerBackground : {}}
onClick={() => {
  if (answerFive === "every week") {
    setAnswerFive("");
    
  } else {
    setAnswerFive("every week");
    
  }
  
  
}} className="answer">
  <h2 style={answerFive === "every week" ? {color: "var(--cream)"} : {}}>Every week</h2>
  <p>$14.00 per shipment. Includes free first-class shipping.</p>
</div>

<div 
style={answerFive === "every 2 weeks" ? answerBackground : {}}
onClick={() => {
  if (answerFive === "every 2 weeks") {
    setAnswerFive("");
    
  } else {
    setAnswerFive("every 2 weeks");
    
  }
  
  
}} className="answer">
  <h2 style={answerFive === "every 2 weeks" ? {color: "var(--cream)"} : {}}>Every 2 weeks</h2>
  <p>$17.25 per shipment. Includes free priority shipping.</p>
</div>

<div 
style={answerFive === "every month" ? answerBackground : {}}
onClick={() => {
  if (answerFive === "every month") {
    setAnswerFive("");
    
  } else {
    setAnswerFive("every month");
    
  }
 
  
}} className="answer">
  <h2 style={answerFive === "every month" ? {color: "var(--cream)"} : {}}>Every month</h2>
  <p>$22.50 per shipment. Includes free priority shipping.</p>
  </div>
  </div>
}

</div>

<div className="order-summary">
  <h3>Order Summary</h3>
  <p>“I drink coffee <span style={{color: "var(--cyan)"}}>{answerOne ? answerOne : "_____"}</span>, with a <span style={{color: "var(--cyan)"}}>{answerTwo ? answerTwo : "_____"}</span> type of bean. <span style={{color: "var(--cyan)"}}>{answerThree ? answerThree : "_____"}</span> ground ala <span style={{color: "var(--cyan)"}}>{answerFour ? answerFour : "_____"}</span>, 
  sent to me <span style={{color: "var(--cyan)"}}>{answerFive ? answerFive : "_____"}</span> .”</p>
  </div>

  <button 
  onClick={() => {
    setModal(true);
  }}
  disabled={disable} style={ disable ? disabledStyle : {}}>Create my plan!</button>
</div>
  </div>
</div>
  
  {modal &&  
  <div className="modal-wrapper">
  <div className="modal">
  <h2>Order Summary</h2>

<div className="modal-text">
  <p className="user-preferences">“I drink coffee <span style={{color: "var(--cyan)"}}>{answerOne ? answerOne : "_____"}</span>, with a <span style={{color: "var(--cyan)"}}>{answerTwo ? answerTwo : "_____"}</span> type of bean. <span style={{color: "var(--cyan)"}}>{answerThree ? answerThree : "_____"}</span> ground ala <span style={{color: "var(--cyan)"}}>{answerFour ? answerFour : "_____"}</span>,
  sent to me <span style={{color: "var(--cyan)"}}>{answerFive ? answerFive : "_____"}</span>.”</p>

  <p className="modal-description">Is this correct? You can proceed to checkout or go back to plan selection if something 
  is off. Subscription discount codes can also be redeemed at the checkout.</p>

<div className="price-and-checkout">
<span className="price">$14.00/month</span>

<button onClick={() => {
  setModal(false);
}}>{modalButtonText}</button>
</div>
</div>
  
  </div>
  </div>}
  

<div className="plan-footer">
        <img className="logo-dark" src={LogoDark} alt="logo-dark" />
        <Link className="plan-nav-links" to="/">Home</Link>
        <Link className="plan-nav-links" to="/about">About us</Link>
        <Link className="plan-nav-links" to="/plan">Create your plan</Link>
  
  <div className="social-media-icons">
  <img className="social-media" src={Facebook} alt="facebook" />
  <img className="social-media twitter" src={Twitter} alt="facebook" />
  <img className="social-media" src={Instagram} alt="facebook" />
  </div>
  </div>
        </div>
    )
}

export default Plan
