import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function MyLayout() {
  const [islogin, setIslogin] = useState(false);
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
          <main>
            <div className="introCard">
              <p style={{ fontWeight: "500", marginBottom: "1px" }}>
                I'm Isxaaq, a full stack developer
              </p>
              <hr />
              <p style={{ color: "rgba(0, 0, 0, 0.7)", margin: "1px" }}>
                I started my first line of code in 2022.
              </p>
              <p style={{ color: "rgba(0, 0, 0, 0.7)", marginTop: "1px" }}>
                Most of the time i work with frontend, right now i am learning
                backend
              </p>
            </div>
            {/* <div className="techCard">
              <button className="tCard"></button>
              <button className="tCard"></button>
              <button className="tCard"></button>
              <button className="tCard"></button>
            </div> */}
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
}

export default MyLayout;
