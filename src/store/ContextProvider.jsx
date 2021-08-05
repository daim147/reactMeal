import React from "react";
import ContextObj from "./ContextObj";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const reducer = (state, actions) => {
  if (actions.type === "ADD") {
    const totalAmount =
      state.totalAmount + actions.item.price * actions.item.amount;
    // ! Check whether it exist in array
    const findItem = state.items.find((item) => item.id === actions.item.id);
    // ! If not exists than add
    if (!findItem) {
      return { items: [...state.items, actions.item], totalAmount };
    } else {
      // ! if exist than change the amount of existing item
      const addExistingAndArray = state.items.map((item) => {
        if (item.id === actions.item.id) {
          return { ...item, amount: item.amount + actions.item.amount };
        }
        return item;
      });
      return { items: addExistingAndArray, totalAmount };
    }
  }

  if (actions.type === "REMOVE") {
    let existing;
    const remainingItem = state.items
      .map((item) => {
        if (item.id === actions.id) {
          existing = item;
          if (item.amount === 1) {
            return null;
          }
          return { ...item, amount: --item.amount };
        } else {
          return item;
        }
      })
      .filter((item) => item);
    const totalAmount = Math.abs(state.totalAmount - existing.price);

    return {
      items: [...remainingItem],
      totalAmount,
    };
  }

  return state;
};
const ContextProvider = (props) => {
  const [state, setState] = React.useReducer(reducer, defaultState);
  const addItem = (item) => {
    setState({ type: "ADD", item });
  };
  const removeItem = (id) => {
    setState({ type: "REMOVE", id });
  };
  const store = {
    ...state,
    addItem,
    removeItem,
  };
  return (
    <ContextObj.Provider value={store}>{props.children}</ContextObj.Provider>
  );
};

export default ContextProvider;
