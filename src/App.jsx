import React from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  return (
    <div className="flex gap-5 p-6 border bg-grey-200">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
