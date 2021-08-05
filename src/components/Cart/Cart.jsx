import React from "react";
import classes from "./cart.module.css";
import ContextObj from "../../store/ContextObj";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const ctx = React.useContext(ContextObj);
  const onAdd = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const onRemove = (id) => {
    ctx.removeItem(id);
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          onAdd={onAdd.bind(null, item)}
          onRemove={onRemove.bind(null, item.id)}
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );

  const totalAmount = ctx.totalAmount;
  return (
    <Modal onClick={props.onClick}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
