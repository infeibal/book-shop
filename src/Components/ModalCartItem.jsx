import { ModalCartItemList } from "./ModalCartItemList";

export const ModalCartItem = ({
  cartItems,
  setCartItems,
  getItemsCostsList,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <hr className="border-none h-[0.5px] bg-neutral-700 opacity-30" />
      <div className="cart max-h-[500px] overflow-auto px-2">
        {cartItems.map((item) => (
          <ModalCartItemList
            key={item.id}
            cartItems={cartItems}
            item={item}
            setCartItems={setCartItems}
            getItemsCostsList={getItemsCostsList}
          />
        ))}
      </div>
      <hr className="border-none h-[0.5px] bg-neutral-700 opacity-30" />
    </div>
  );
};
