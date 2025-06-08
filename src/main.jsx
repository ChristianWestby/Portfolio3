import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";
import IntroRevealPortal from "@components/IntroRevealPortal";
import Home from "@pages/Home";
import About from "@pages/About";
import ProjectsPage from "@pages/ProjectsPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IntroRevealPortal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);