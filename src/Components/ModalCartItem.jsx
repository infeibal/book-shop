export const ModalCartItem = ({ setCartItems, cartItems }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <hr className="border-none h-[0.5px] bg-neutral-700 opacity-30" />
      <div className="cart max-h-[500px] overflow-auto px-2">
        {cartItems.map((item) => (
          <div className="flex min-h-[50px]  items-center gap-4">
            <div className="w-[80px] h-[80px]">
              <img
                src={item.img}
                className="object-cover w-[70px] h-[70px] rounded-lg"
              />
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <h2 className="text-lg font-semibold line-clamp-1 w-[200px]">
                {item.title}
              </h2>
              <p className="text-lg font-light">${item.price}</p>
              <button
                onClick={() =>
                  setCartItems((prev) => prev.filter((a) => a.id != item.id))
                }
                className="text-2xl"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/58/58253.png"
                  className="w-5 hover:opacity-30 opacity-50"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-none h-[0.5px] bg-neutral-700 opacity-30" />
    </div>
  );
};
