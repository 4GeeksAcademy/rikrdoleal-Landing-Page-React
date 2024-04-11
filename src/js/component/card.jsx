import React from "react";
import Rigo from "./../../img/rigo-baby.jpg";

const Card = () => {
  return (
      <div className="card col-12 col-xl-3 my-2" style={{ width: "20rem" }}>
        <img src= {Rigo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
};

export default Card;