import { useEffect, useState } from "react";
import Products from "./data.json";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const CardPage = ({ location }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const title = location.pathname.split("product/")[1].split("%20").join(" ");

    setCurrentProduct(Products.find((product) => product.title == title));
  });
  return (
    <div className="animate-appearance min-w-screen min-h-screen flex flex-col justify-between">
      <div className="p-20 flex gap-10 justify-center self-center  max-w-[1200px]">
        <img
          src={currentProduct.img}
          alt="product`s image"
          className="max-w-[400px] object-cover rounded "
        />
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
          <h2 className="font-light">{currentProduct.desc}</h2>
          <h3 className="font-semibold text-2xl">$ {currentProduct.price}</h3>
          <button
            onClick={() => alert("Спасибо за покупку!")}
            className="self-start font-semibold px-8 py-3 rounded-lg hover:bg-[#2d2d2f] text-gray-100 bg-black duration-300 flex justify-center items-center gap-2"
          >
            Купить сейчас
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};
