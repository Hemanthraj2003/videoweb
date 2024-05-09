import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fetch from "./fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
