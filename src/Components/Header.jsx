import { HeaderNav } from "./HeaderNav";

export const Header = ({ setIsShowModalCart, cartItems }) => {
  return (
    <header className="min-w-[1920px] min-h-screen flex justify-center bg-white relative z-[1]">
      <HeaderNav
        setIsShowModalCart={setIsShowModalCart}
        cartItems={cartItems}
      />
      <h2 className="fixed z-[1] top-[20%] right-[4%] text-[60px] font-light w-[500px]">
        Journey Through Words: Explore Our Bookstore!
      </h2>
      <h1 className="fixed z-[1] top-[64%] left-[4%] text-[100px] font-bold text-shadow-lg ">
        Book Shop
      </h1>
      <h3 className="fixed z-[1] top-[78%] opacity-65 left-[4.3%] text-[30px] font-light text-shadow-lg w-[500px]">
        Books for Every <br />
        Bookworm: Dive into Our Collection!
      </h3>
      <img
        src="https://humblyproud.com/en/images/08-flying-books.png"
        alt="main art"
        className="fixed z-[0] pointer-events-none min-w-[1920px] select-none top-[50px] scale-110 "
      />
    </header>
  );
};
