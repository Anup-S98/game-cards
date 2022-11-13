import React from "react";
import Images from "./Images";

function Card(props) {
    // console.log(props);
  return (
    <>
      <div className="item">
        <Images compImg={props.imgSrc}/>
        <div className="contents">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <button type="button">Click to Play!</button>
        </div>
      </div>
    </>
  );
}

export default Card;
