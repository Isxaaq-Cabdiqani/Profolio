import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function MyLayout() {
  const [islogin, setIslogin] = useState(false);
  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");
  // const [error, setError] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Pressed();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  function Pressed() {
    setIslogin((p) => !p);
  }
  return (
    <div id="TheLayout">
      {islogin == false && (
        <div className="loginPage">
          <div className="loginCard">
            <h2 style={{ textAlign: "left" }}>Hi there 🌟</h2>

            <p style={{ textAlign: "left", fontWeight: "500" }}>
              I'm Isxaaq, a full stack web developer.
            </p>

            <p style={{ textAlign: "left", color: "rgba(0, 0, 0, 0.45)" }}>
              Here is my profolio, where all of my projects are.
            </p>

            <p style={{ textAlign: "left", color: "rgba(0, 0, 0, 0.45)" }}>
              Please press Enter to go forward
            </p>
          </div>
        </div>
      )}
      {islogin && (
        <div id="LayoutDisplay">
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
    </div>
  );
}

export default MyLayout;
