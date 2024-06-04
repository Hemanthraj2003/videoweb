import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fetch from "./fetch";
import Simple from "./simple";
import InstallPage from "./InstallPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./Upload";
import Home from "./Home";
import { Read } from "./crd";
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/install_app" element={<InstallPage />} />
        <Route path="/secret" element={<App />} />
        <Route path="/xyzupload" element={<Upload />} />
        <Route path="/xyzRead" element={<Read />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/id/:id" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
