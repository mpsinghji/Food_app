import React, { useState } from 'react';
import '../styles/Cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, weight, price, img } = item;
  const [buttonText, setButtonText] = useState('ADD');
  const [buttonStyle, setButtonStyle] = useState({ backgroundColor: 'white' });

  function addEffect() {
    const button = document.getElementById("myButton");
    button.classList.add("clicked");
    setButtonText('✔');
    setButtonStyle({ backgroundColor: '#28a745',color:'white' });
    handleClick(item);
  }

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{weight}</p>
        <p>₹{price}<button id='myButton' style={buttonStyle} onClick={() => { addEffect(); handleClick(item); }}>{buttonText}</button></p>
      </div>
    </div>
  );
}

export default Cards;
