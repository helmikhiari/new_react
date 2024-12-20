import React from "react";

const Card = ({ name, favFood }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "2px",
        borderRadius: "20px",
      }}
    >
      <h1>Name : {name}</h1>
      <p>Food: {favFood}</p>
    </div>
  );
};

export default Card;
