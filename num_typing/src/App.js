import "./App.css";
import React from "react";
import NumTyping from "./components/pages/NumTyping";
import Start from "./components/pages/StartMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  // return <NumTyping />;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/numtype" element={<NumTyping />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
