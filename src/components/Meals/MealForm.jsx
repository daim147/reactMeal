import React, { useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../UI/Input";

const MealForm = (props) => {
  const ref = useRef();

  const addAmount = (e) => {
    e.preventDefault();
    props.addItemAmount(+ref.current.value);
  };
  return (
    <form className={classes.form} onSubmit={addAmount}>
      <Input
        label="Amount"
        ref={ref}
        addAmount={addAmount}
        input={{
          type: "number",
          min: "1",
          max: "8",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealForm;
