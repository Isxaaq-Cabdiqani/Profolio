import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function MyLayout() {
  const [islogin, setIslogin] = useState(false);
  const [name, setName] = useState("");

  function Login() {
    setIslogin((p) => !p);
  }
  return (
    <>
      {islogin == false && (
        <div className="loginPage">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <button onClick={Login}>Login</button>
        </div>
      )}
      {islogin && (
        <div id="Layout">
          <header>Projects</header> <div className="nameHolder">{name}</div>
          <div className="sideBar">
            <Link to={"/BmiCalculator"}>Bmi Calculator</Link>
            <Link to={"/Calculator"}>Calculator</Link>
            <Link to={"/ImageSlider"}>Image Slider</Link>
            <Link to={"/TipCalculator"}>Tip Calculator</Link>
            <Link to={"/TodoApp"}>Todo App</Link>
            <Link to={"/HotelBooking"}>Hotel Booking</Link>
          </div>
          <main>
            <Outlet />
          </main>
          <footer>Projects</footer>
        </div>
      )}
    </>
  );
}

export default MyLayout;
