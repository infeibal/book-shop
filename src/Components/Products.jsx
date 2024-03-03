import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Sort } from "./Sort";
import books from "./data.json";

export const Products = ({ getCardItems }) => {
  const pageValue = 9;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(pageValue);
  const [sortFilter, setSortFilter] = useState("Нет");
  const [addInCard, setAddInCard] = useState([]);

  function getFilter(value) {
    setSortFilter(value);
  }

  useEffect(() => {
    setData(books);
  }, []);

  useEffect(() => {
    getCardItems(addInCard);
  }, [addInCard]);

  return (
    <main className="bg-[#edecf3] h-full min-w-screen flex flex-col relative z-[2] rounded-t-[40px] py-4 gap-4 ">
      <Sort getFilter={getFilter} />
      <div className="flex flex-row flex-wrap justify-around gap-6">
        {data
          .sort((a, b) => {
            if (sortFilter === "Нет") return a.id - b.id;
            if (sortFilter === "По названию") {
              if (a.title > b.title) {
                return 1;
              } else return -1;
            }
            if (sortFilter === "По убыванию цены") return b.price - a.price;
            if (sortFilter === "По возрастанию цены") return a.price - b.price;
          })
          .filter((book) => book.id <= page)
          .map((book) => (
            <Card
              setAddInCard={setAddInCard}
              key={book.id}
              id={book.id}
              title={book.title}
              desc={book.desc}
              price={book.price}
              img={book.img}
            />
          ))}
      </div>
      {page < data.length ? (
        <div className="text-center">
          <button
            onClick={() => setPage((prev) => prev + pageValue)}
            className="bg-[#d6d4dc] px-6 py-2 rounded-lg font-semibold text-lg hover:bg-[#adacb3] duration-300"
          >
            Показать еще
          </button>
        </div>
      ) : null}
    </main>
  );
};
