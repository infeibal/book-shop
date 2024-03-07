import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Products } from "./Products";
import { ModalCart } from "./ModalCart";
import { Footer } from "./Footer";

export const Home = () => {
  const [isShowModalCart, setIsShowModalCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isShowModalCart) {
      document.querySelector("html").style.setProperty("--bg-track", "#666666");
      document.querySelector("html").style.setProperty("--bg-thumb", "#666666");
      document
        .querySelector("html")
        .style.setProperty("--bg-thumb-hover", "#666666");
    } else {
      document.querySelector("html").style.setProperty("--bg-track", "#edecf3");
      document.querySelector("html").style.setProperty("--bg-thumb", "white");
      document
        .querySelector("html")
        .style.setProperty("--bg-thumb-hover", "rgb(154, 154, 154)");
    }
  }, [isShowModalCart]);

  return (
    <div
      id="home"
      className={`animate-appearance overflow-x-hidden bg-[#f3f2f7] duration-200 min-w-screen min-h-screen flex flex-col items-center justify-center ${
        isShowModalCart ? "bg-black" : ""
      }`}
    >
      {isShowModalCart ? (
        <ModalCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setIsShowModalCart={setIsShowModalCart}
        />
      ) : null}
      <div
        className={`${
          isShowModalCart
            ? "min-w-screen opacity-40 pointer-events-none select-none"
            : ""
        }`}
      >
        <Header setIsShowModalCart={setIsShowModalCart} cartItems={cartItems} />
        <Products setCartItems={setCartItems} />
        <Footer />
      </div>
    </div>
  );
};
