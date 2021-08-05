import React, { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import ContextObj from "../../store/ContextObj";
const MealItem = (props) => {
  const ctxObj = useContext(ContextObj);
  const addItemAmount = (amount) => {
    ctxObj.addItem({ ...props, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealForm addItemAmount={addItemAmount} />
      </div>
    </li>
  );
};

export default MealItem;
