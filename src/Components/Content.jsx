import React from "react";
import Nav from "./Nav";
import CardsContainer from "./CardsContainer";
import TableContainer from "./TableContainer";
const Content = () => {
  return (
    <div className="w-screen overflow-x-auto md:w-5/6 flex flex-col gap-5">
      <Nav />
      <CardsContainer />
      <TableContainer />
    </div>
  );
};

export default Content;
