import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Products } from "./Components/Products";
import { ModalCart } from "./Components/ModalCart";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  function getCardItems(value) {
    setCartItems(value);
  }

  return (
    <div
      className={`overflow-x-hidden
      bg-[#f3f2f7] min-w-screen min-h-screen flex flex-col items-center justify-center ${
        isShowModal ? "bg-black" : ""
      }`}
    >
      {isShowModal ? (
        <ModalCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setIsShowModal={setIsShowModal}
        />
      ) : null}
      <div
        className={`${
          isShowModal
            ? "min-w-screen opacity-40 pointer-events-none select-none"
            : ""
        }`}
      >
        <Header setIsShowModal={setIsShowModal} />
        <Products
          cartItems={cartItems}
          setCartItems={setCartItems}
          getCardItems={getCardItems}
        />
        <Footer />
      </div>
    </div>
  );
};
