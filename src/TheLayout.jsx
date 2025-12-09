import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function MyLayout() {
  const [islogin, setIslogin] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function Login() {
    if (name == "ahmed0987" || pass == "1122") return setIslogin((p) => !p);
    else {
      setError(true);
    }
  }
  return (
    <div id="TheLayout">
      {islogin == false && (
        <div className="loginPage">
          <div className="loginCard">
            <h2>Welcome to my Profolio</h2>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <button onClick={Login}>Login</button>
            {error && <p style={{ color: "red" }}>invalid name or password</p>}
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
