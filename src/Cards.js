import React from 'react'
import './styles/Cards.css'

const Cards = ({item,handleClick}) => {
    const{title,weight,price,img}=item;
  return (

    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Img"/>
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{weight}</p>
            <p>₹{price}<button onClick={()=>handleClick(item)}>ADD</button></p>
            
        </div>
    </div>
  )
}

export default Cards
