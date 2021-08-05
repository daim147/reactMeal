import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meal from "./components/Meals/Meal";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [showModal, setModalShow] = React.useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <ContextProvider>
      {showModal && <Cart onClick={closeModal} />}
      <Header onClick={openModal} />
      <main>
        <Meal />
      </main>
    </ContextProvider>
  );
}

export default App;
