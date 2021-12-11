import { useState, useEffect } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Plan from "./Components/Plan/Plan";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      }
    }, []);
  
    return windowWidth;
  }

  return (
    <Router>
    
    <div className="App">
    <Routes>
    <Route path="/" element={<Home useWindowWidth={useWindowWidth}/>} />
      {/* <Home useWindowWidth={useWindowWidth} /> */}
      <Route path="/about" element={<About useWindowWidth={useWindowWidth}/>} />
      <Route path="/plan" element={<Plan useWindowWidth={useWindowWidth}/>} /> 
      </Routes>
      {/* <About useWindowWidth={useWindowWidth} /> 
       <Plan useWindowWidth={useWindowWidth} /> */}

    </div>
    
    </Router>
  );
}

export default App;
