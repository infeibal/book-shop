import { useEffect, useState } from "react";

export const ModalCartItemList = ({
  item,
  setCartItems,
  getItemsCostsList,
}) => {
  const [itemsCount, setItemsCount] = useState(1);
  const maxItemsCount = 99;

  const [itemCost, setItemCost] = useState(
    +(item.price * itemsCount).toFixed(2)
  );

  useEffect(() => {
    setItemCost(+(item.price * itemsCount).toFixed(2));
  }, [itemsCount]);

  useEffect(() => {
    getItemsCostsList(itemCost, item.id);
  }, [itemCost]);

  return (
    <div className="flex min-h-[50px]  items-center gap-4">
      <div className="w-[80px] h-[80px]">
        <img
          src={item.img}
          className="object-cover w-[70px] h-[70px] rounded-lg"
        />
      </div>
      <div className="flex gap-4 items-center justify-between w-full">
        <h2 className="text-lg font-semibold line-clamp-2 w-[150px]">
          {item.title}
        </h2>
        <div className="flex justify-between gap-4 items-center">
          <button
            disabled={!(itemsCount - 1)}
            onClick={() =>
              setItemsCount((prev) => {
                return --prev;
              })
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              alt="minus"
              className={`w-5 ${
                itemsCount - 1 ? "hover:opacity-30" : ""
              } opacity-50 `}
            />
          </button>
          <span className="text-lg font-light">{itemsCount}</span>
          <button
            disabled={!!(itemsCount >= maxItemsCount)}
            onClick={() =>
              setItemsCount((prev) => {
                return prev < maxItemsCount ? ++prev : prev;
              })
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
              alt="plus"
              className={`w-5  opacity-50 ${
                itemsCount >= maxItemsCount ? "" : "hover:opacity-30"
              }`}
            />
          </button>
        </div>
        <p className="text-lg font-light w-[70px] text-center">
          ${itemCost.toFixed(2)}
        </p>
        <button
          onClick={() => {
            setCartItems((prev) =>
              prev.filter((cartItems) => cartItems.id != item.id)
            );

            getItemsCostsList(itemCost, item.id, true);
          }}
          className="text-2xl"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/58/58253.png"
            className="w-5 hover:opacity-30 opacity-50"
          />
        </button>
      </div>
    </div>
  );
};
