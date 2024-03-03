import { ModalCartItem } from "./ModalCartItem";

export const ModalCart = ({ setIsShowModal, cartItems, setCartItems }) => {
  return (
    <div className="flex flex-col fixed z-[99]  top-[10%] w-[518px] bg-[#edecf3] min-h-[100px] rounded-lg p-10">
      <button
        onClick={() => setIsShowModal(false)}
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
          <ModalCartItem cartItems={cartItems} setCartItems={setCartItems} />
          <div className="ml-auto mt-6 text-lg font-light">
            Итого:
            <span>
              {" "}
              ${cartItems.reduce((item, acc) => acc.price + item, 0).toFixed(2)}
            </span>
          </div>
        </>
      ) : (
        <p className="text-lg font-light">Корзина пуста</p>
      )}
    </div>
  );
};
