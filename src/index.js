import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fetch from "./fetch";
import Simple from "./simple";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Fetch />} />
        <Route path="/simple" element={<Simple />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
