import { Link } from "react-router-dom";
export const HeaderNav = ({ cartItems, setIsShowModalCart }) => {
  return (
    <div className="fixed z-[1] bg-[#dddde3] min-w-[500px] h-[50px] px-6 py-8 hover:py-12 hover:px-8 rounded-b-lg flex justify-center gap-4 items-center duration-300">
      <Link
        to="/"
        className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          alt="home img"
          className="w-5"
        />
        Home
      </Link>
      <a
        href="#footer"
        className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1034/1034131.png"
          alt="home img"
          className="w-5"
        />
        Contacts
      </a>
      <div className="flex relative z-[1] group">
        <button
          onClick={() => setIsShowModalCart(true)}
          className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            alt="home img"
            className="w-5"
          />
          Cart
        </button>
        {cartItems.length ? (
          <div className="animate-appearanceFast group-hover:scale-75 group-hover:right-[-0.3rem]  duration-200 flex items-center justify-center p-1 absolute right-[-0.2rem] bottom-5 text-sm w-5 h-5 bg-orange-400 rounded-full pointer-events-none">
            {cartItems.length <= 9 ? cartItems.length : 9}
            {cartItems.length > 9 ? <span className=" mb-[2px]">+</span> : null}
          </div>
        ) : null}
      </div>
      <button className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
          alt="home img"
          className="w-5"
        />
        Auth
      </button>
    </div>
  );
};
