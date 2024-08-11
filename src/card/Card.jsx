import React from "react";
import "./_card.scss";

const Card = ({ itemName, itemDescription, itemImage }) => {
  // name, description
  return (
    <div className="card">
      <img src={itemImage} alt={`${itemName} image`} className="itemImg" />
      <h2 className="cardName">{itemName}</h2>
      <p className="cardDesc">{itemDescription}</p>
      <button>Buy</button>
    </div>
  );
};

export default Card;
