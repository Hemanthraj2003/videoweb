import React from "react";
import ReactDOM from "react-dom/client";
import Fetch from "./fetch";
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
        {/* landing page */}
        <Route path="/" element={<Home />} />
        {/* install app page */}
        <Route path="/install_app" element={<InstallPage />} />
        {/* uploadpage */}
        <Route path="/upload" element={<Upload />} />
        {/* dashboard page */}
        <Route path="/Read" element={<Read />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* video landing page */}
        <Route path="/id/:id" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
