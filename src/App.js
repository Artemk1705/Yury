import React, { useRef } from "react";
import './App.css';
import Prev from './prev';
import Epxe from './exp';
import Skills from './skills';
import Contact from './conact';
import Rec from "./rec";


function App() {
  const expirienceRef = useRef(null);
  const skillsRef = useRef(null);
  const recomendationsRef = useRef(null);

  const scrollToRef = (ref) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("The section is not rendered yet!");
    }
  };
  return (
    <div className="App">
        <div className="nav_bar">
            <div className="first_name">VLASOV</div>
            <div className="nav_content">
            <div className="nav" onClick={() => scrollToRef(expirienceRef)}>Expirience</div>
        <div className="nav" onClick={() => scrollToRef(skillsRef)}>Skills</div>
        <div className="nav" onClick={() => scrollToRef(recomendationsRef)}>Recommendations</div>
            </div>
        </div>
      <Contact />
      <div>
        <Prev />
        <Epxe ref={expirienceRef} />
        <Skills ref={skillsRef} />
        <Rec ref={recomendationsRef}/>
      </div>
    </div>
  );
}

export default App;
