import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import CatchAllRoute from "./components/BuilderIo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import theme from "./Theme";
import Service from "./components/Service";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/services" element={<Service />} />
          <Route path="/about"  element={<AboutUs />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
