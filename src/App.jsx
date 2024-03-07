import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { CardPage } from "./Components/CardPage";
import { useEffect } from "react";

export const App = () => {
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("product/")) {
      document.title = location.pathname
        .split("product/")[1]
        .split("%20")
        .join(" ");
    } else {
      document.title = "Book Shop";
    }

    if (document.URL.includes("#footer")) {
      window.location.href = "";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:name" element={<CardPage location={location} />} />
    </Routes>
  );
};
