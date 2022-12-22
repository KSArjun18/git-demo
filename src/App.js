import React from "react";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./TopBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        {" "}
        hi
        <TopBar></TopBar>
        <Card></Card>
      </div>
    </BrowserRouter>
  );
}

export default App;
