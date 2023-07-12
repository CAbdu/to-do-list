import React, {useState} from "react"; 
import  './togglePopUp.css';
import ColorButton from "./colorButton";

export default function PopUp () {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
  <div>
      <ColorButton className="col-button"
        onClick={togglePopUp} >
      </ColorButton>
      {showPopUp && (
        <div className="pop-up">
          <div className="overlay" onClick={togglePopUp}></div>
          <h1>This is the Pop-Up</h1>
          <p>Pop-Up content goes here...</p>
        </div>
      )}
  </div>
  );
};
