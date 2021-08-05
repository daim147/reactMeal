import React from "react";
import classes from "./header.module.css";
import image from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Meal images" />
      </div>
    </>
  );
};

export default Header;
