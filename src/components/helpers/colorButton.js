import React from "react";  
import colorWheel from "../images/colorWheel.png"; 
import Modal from "../Modal/Modal";
import '../css/modal.css';
import "../css/home.css";



function ColorButton({ imageAlt, onClick }) {

  

  return (
    <button 
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        width: 0,
        height: 0,
        cursor: 'pointer',
        
      }}
      onClick={onClick}
    >
      <img style={{
        width: '20px',
        height: '20px',
        marginLeft: '20px',
        opacity: '50%',
      }} 
      src={colorWheel} 
      alt={imageAlt} />
    </button>
  );
};

export default ColorButton;
