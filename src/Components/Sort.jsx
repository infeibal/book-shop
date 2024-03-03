import { useState } from "react";

export const Sort = ({ getFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("Нет");

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-min flex flex-col gap-2 group relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#d6d4dc]   w-max px-6 py-2 rounded-full font-semibold text-lg hover:bg-[#adacb3] duration-300"
        >
          Сортировка: <span className="font-bold">{filter}</span>
        </button>

        {isOpen ? (
          <div
            id="box"
            className="bg-[#cccbd0] w-full min-h-20 rounded-lg absolute z-[10] top-[50px] cursor-pointer"
          >
            <div
              className="text-lg px-4 py-2 hover:bg-[#b7b6ba] rounded-lg duration-300 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setFilter("По названию");
                getFilter("По названию");
              }}
            >
              По названию
            </div>
            <div
              className="text-lg px-4 py-2 hover:bg-[#b7b6ba] rounded-lg duration-300 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setFilter("По убыванию цены");
                getFilter("По убыванию цены");
              }}
            >
              По убыванию цены
            </div>
            <div
              className="text-lg px-4 py-2 hover:bg-[#b7b6ba] rounded-lg duration-300 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setFilter("По возрастанию цены");
                getFilter("По возрастанию цены");
              }}
            >
              По возрастанию цены
            </div>
          </div>
        ) : null}
      </div>
      {filter !== "Нет" ? (
        <span
          onClick={() => {
            setIsOpen(false);
            setFilter("Нет");
            getFilter("Нет");
          }}
          className="  ml-2 text-white text-lg rounded-full px-3 py-1 bg-[#b6b5ba]  transition duration-500 ease select-none hover:invert "
        >
          ⨯
        </span>
      ) : null}
    </div>
  );
};
