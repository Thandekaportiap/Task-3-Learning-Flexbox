
import React from "react";

const flexbox = () =>{
  return (
    <>
    <div className="container">
      <div className="item green"></div>
        <div  className="item red"></div>
        <div className="item green"></div>
      </div>
      
      <div className="container">
      <div className="item blue"></div>
        <div className="round"><div className="item center"></div></div>
        <div className="item blue"></div>
      </div>

      <div className="container">
      <div className="item green"></div>
        <div className="item red"></div>
        <div className="item green"></div>
      </div>
       
    </>
  )
}

export default flexbox;
