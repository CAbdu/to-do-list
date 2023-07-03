import React, {useState} from "react"; 
import  './togglePopUp.css';

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
  <div>
      <button onClick={togglePopUp}>Toggle Pop-Up</button>
      {showPopUp && (
        <div className="pop-up">
          <h1>This is the Pop-Up</h1>
          <p>Pop-Up content goes here...</p>
        </div>
      )}
  </div>
  );
};

export default PopUp;