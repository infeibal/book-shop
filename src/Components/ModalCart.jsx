import { useEffect, useState } from "react";
import { ModalCartItem } from "./ModalCartItem";

export const ModalCart = ({ setIsShowModalCart, cartItems, setCartItems }) => {
  const [update, setUpdate] = useState(0);
  const [itemsCostsList, setItemsCostsList] = useState([]);

  const [amount, setAmount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const startValue = itemsCostsList.reduce((acc, item) => acc + item, 0);

    setAmount(startValue);
    setDelivery(startValue / 100);
    setTotal(startValue + startValue / 100);

    console.log(itemsCostsList);
  }, [update]);

  function getItemsCostsList(itemCost, itemId, remove = false) {
    setItemsCostsList((prev) => {
      if (remove) {
        let tempList = prev;
        tempList[itemId] = 0;
        return tempList;
      } else {
        if (prev && prev.length) {
          let tempList = prev;
          tempList[itemId] = itemCost;
          return tempList;
        } else {
          let tempList = [];
          tempList[itemId] = itemCost;
          return tempList;
        }
      }
    });

    setUpdate((prev) => ++prev);
  }

  return (
    <div className="animate-appearance flex flex-col fixed z-[99]  top-[7%] w-[600px] bg-white min-h-[100px] rounded-lg p-10">
      <button
        onClick={() => setIsShowModalCart(false)}
        className="text-2xl absolute z-[100] top-4 right-4"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/58/58253.png"
          className="w-6 hover:opacity-50 opacity-70"
        />
      </button>
      <h1 className="text-2xl font-semibold mb-6">Ваш заказ</h1>
      {cartItems.length ? (
        <>
          <ModalCartItem
            setCartItems={setCartItems}
            cartItems={cartItems}
            getItemsCostsList={getItemsCostsList}
          />

          <div className="flex flex-col self-end text-end my-6 gap-2">
            <span className=" font-light text-gray-500">
              Сумма: ${amount.toFixed(2)}
            </span>
            <span className=" font-light text-gray-500">
              Доставка: ${delivery.toFixed(2)}
            </span>
            <span className=" text-3xl font-light">
              Итого: ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => alert("Спасибо за покупку!")}
            className="self-end font-semibold px-8 py-3 rounded-lg hover:bg-[#2d2d2f] text-gray-100 bg-black duration-300 flex justify-center items-center gap-2"
          >
            Оформить заказ
          </button>
        </>
      ) : (
        <p className="text-lg font-light">Корзина пуста</p>
      )}
    </div>
  );
};
