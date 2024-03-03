export const Header = ({ setIsShowModal }) => {
  return (
    <header className="min-w-[1920px] min-h-[1002px] flex justify-center bg-white relative z-[1]">
      <div className="fixed z-[1] bg-[#dddde3] min-w-[500px] h-[50px] px-6 py-8 hover:py-12 hover:px-8 rounded-b-lg flex justify-center gap-4 items-center duration-300">
        <button className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt="home img"
            className="w-5"
          />
          Home
        </button>
        <button className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="home img"
            className="w-5"
          />
          About
        </button>
        <button className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1034/1034131.png"
            alt="home img"
            className="w-5"
          />
          Contacts
        </button>
        <button
          onClick={() => setIsShowModal(true)}
          className="font-semibold px-4 py-2 rounded-lg hover:bg-[#b0afb5] hover:scale-110 duration-200 flex justify-center items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            alt="home img"
            className="w-5"
          />
          Cart
        </button>
      </div>
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
