/* eslint-disable */

import React, { useState, useEffect } from "react";
import '../style/userchoicesPage/index.css';
import sideImage from "../helpers/images/jonathan-marchal-7Vs5LY_rbKk-unsplash.jpg";
import { Link } from "react-router-dom";

function UserChoice({ name, userOptions, setUserOptions, triggerApi }) {
  const [toggle, setToggle] = useState(false);



  const clickHandler = (option, button, index) => {
    if (userOptions.includes(option)) {
      setToggle(false);
      button.style.backgroundColor = "#8C8C8C";
      let index = userOptions.indexOf(option);
      userOptions.splice(index, 1);
    } else if (!userOptions.includes(option) && userOptions.length < 5) {
      setToggle(true);
      button.style.backgroundColor = "black";
      setUserOptions((prevState) => prevState.concat(option));
    }
    console.log(userOptions);
  };

  useEffect(() => { 
    //  console.log(userOptions)
  });

  const options = [
    "tech",
    "culture",
    "sex",
    "sports",
    "opinion",
    "business",
    "food",
    "health",
    "space",
  ];

  const buttonList = options.map((element, index) => {
    return (
      <button
        key={element}
        onClick={(e) => {
          clickHandler(element, e.target);
        }}
        className={`btn-main ${element}`}
      >
        {" "}
        {element}{" "}
      </button>
    );
  });

  return (
    <div className ="userChoice">
      <div className ="userChoice_content">

      <div className ="userChoice_image">
        <img alt = "" src = {sideImage} className= "userChoice_image--img" />
      </div>

        <div className ="userChoice_form">

          <h2 className ="userChoice_form--text">Welcome to your dashboard {name}! </h2>
          <p className ="userChoice_text--3">
            {" "}
            Personalize your news feed!
          </p>

          <div className = "userChoice_buttonList">{buttonList}</div>

          {userOptions.length === 5 ? <Link to="/pages/AllSet.js" className="userChoice_form--nextbtn" onClick={triggerApi}>
            {" "}
            next ??? {" "}
          </Link> : <div> Pick 5 News Choices! </div>}

        </div>
      </div>
      
    </div>
  );
}

export default UserChoice;
