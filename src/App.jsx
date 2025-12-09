import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import BmiCalculator from "../pages/BmiCalculator";
import Calculator from "../pages/Calculator";
import ImageSlider from "../pages/ImageSlider";
import TipCalculator from "../pages/TipCalculator";
import TodoApp from "../pages/todoApp";
import MyLayout from "./TheLayout";
import Home from "../pages/Home";
import HotelBooking from "../pages/HotelBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="BmiCalculator" element={<BmiCalculator />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="ImageSlider" element={<ImageSlider />} />
          <Route path="TipCalculator" element={<TipCalculator />} />
          <Route path="TodoApp" element={<TodoApp />} />
          <Route path="HotelBooking" element={<HotelBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
