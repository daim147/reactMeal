import React from "react";

export default React.createContext({
  items: [],
  totalAmout: 0,
  addItem: () => {},
  removeItem: () => {},
});
