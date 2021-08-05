import React from "react";
import classes from "./headerButton.module.css";
import CartIcon from "../Cart/CartIcons";
import ContextObj from "../../store/ContextObj";

const HeaderButton = (props) => {
  const [bump, setBump] = React.useState(false);
  const ctxObj = React.useContext(ContextObj);
  const itemTotal = ctxObj.items.reduce((acc, value) => acc + value.amount, 0);
  React.useEffect(() => {
    if (itemTotal === 0) return;
    setBump(true);
    const timer = setTimeout(setBump.bind(null, false), 300);

    return () => clearTimeout(timer);
  }, [itemTotal]);
  return (
    <button
      className={`${classes.button} ${bump ? classes.bump : ""}`}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemTotal}</span>
    </button>
  );
};

export default HeaderButton;
