import { Link } from "react-router-dom";

export const Card = ({ id, title, desc, img, price, setCartItems }) => {
  return (
    <div className="relative group">
      <Link
        onClick={() => {
          document.title = title;
        }}
        to={`product/${title}`}
        className="bg-white px-6 py-4  group-hover:scale-110 duration-300 max-w-[500px] max-h-[300px] rounded-lg flex justify-center items-center gap-4 relative"
      >
        <img
          src={img}
          alt=""
          className="object-cover duration-300 rounded-lg h-[240px] w-[200px]"
        />
        <div className="h-[240px] flex flex-col">
          <h4 className="text-xl font-semibold line-clamp-3">{title}</h4>
          <p className="mb-auto font-light text-md line-clamp-4">{desc}</p>
          <div className="flex items-center justify-between">
            <h5 className="text-[18px] font-bold">${price}</h5>
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          setCartItems((prev) => {
            if (prev.length) {
              if (prev.find((item) => item.id == id)) {
                return prev;
              } else {
                return [...prev, { id, title, img, price }];
              }
            } else {
              return [{ id, title, img, price }];
            }
          });
        }}
        className="absolute right-4 bottom-4 group-hover:scale-110 group-hover:right-0 group-hover:bottom-1 font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] bg-[#d2d1d6] duration-300 flex justify-center items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
          alt="home img"
          className="w-5 "
        />
        В корзину
      </button>
    </div>
  );
};
