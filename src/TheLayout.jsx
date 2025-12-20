import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function MyLayout() {
  const Pr = [
    {
      id: 1,
      name: "Weather",
      lin: "/WeatherApp",
    },
    {
      id: 2,
      name: "BMI Calculator",
      lin: "/BmiCalculator",
    },
  ];
  const [projects, setProjects] = useState([...Pr]);
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
            <hr />
            <p style={{ textAlign: "left", fontWeight: "500" }}>
              I'm Isxaaq, a full stack web developer.
            </p>

            <p style={{ textAlign: "left", color: "rgba(0, 0, 0, 0.75)" }}>
              I started my first line of code in 2022.
              <br /> Most of the time I work on new projects to saty up to date
              while learning more, <br /> Right now I'm searching for full stack
              position <br /> Here is my profolio, where you can take a look at
              my projects.
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
            <div className="grid_container">
              <div className="right">
                <div className="exp">
                  <h2 style={{ paddingLeft: "10px" }}>Experience</h2>
                  <hr />
                  <h1>1y +</h1>
                </div>
                <div className="techCard">
                  <div className="title">
                    <h2>Tech Stack</h2>
                    <hr />
                  </div>

                  <div className="lCard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#E65100"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                      ></path>
                      <path
                        fill="#FF6D00"
                        d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                      ></path>
                      <path
                        fill="#EEE"
                        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                      ></path>
                    </svg>
                  </div>
                  <div className="lCard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0277BD"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                      ></path>
                      <path
                        fill="#039BE5"
                        d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                      ></path>
                      <path
                        fill="#EEE"
                        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                      ></path>
                    </svg>
                  </div>
                  <div className="lCard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      ></path>
                    </svg>
                  </div>
                  <div className="lCard">
                    <svg
                      fill="#000000"
                      viewBox="0 0 32 32"
                      id="Camada_1"
                      version="1.1"
                      width="100"
                      height="100"
                      xml:space="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      stroke="#000000"
                      stroke-width="0.00032"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M29.7,16c0-1.9-2.2-3.5-5.7-4.5C24.9,8,24.6,5.3,23,4.3C22.6,4.1,22.2,4,21.7,4c-1.5,0-3.5,1.1-5.5,3c-2-1.9-3.9-3-5.5-3 c-0.5,0-0.9,0.1-1.3,0.3C7.9,5.3,7.6,8,8.4,11.5c-3.4,1-5.7,2.7-5.7,4.5c0,1.9,2.2,3.5,5.7,4.5c-0.8,3.5-0.5,6.3,1.1,7.2 c0.4,0.2,0.8,0.3,1.3,0.3c1.5,0,3.5-1.1,5.5-3c2,1.9,3.9,3,5.5,3c0.5,0,0.9-0.1,1.3-0.3c1.6-0.9,1.9-3.7,1.1-7.2 C27.5,19.5,29.7,17.8,29.7,16z M21.7,5.3c0.3,0,0.5,0,0.6,0.2c0.8,0.4,1.1,2,0.8,4.1c-0.1,0.5-0.2,1.1-0.3,1.6 c-1.1-0.3-2.2-0.4-3.5-0.6c-0.7-1-1.4-1.9-2.2-2.7C18.9,6.2,20.6,5.3,21.7,5.3z M19.9,18.1c-0.4,0.7-0.8,1.4-1.3,2 c-0.8,0.1-1.6,0.1-2.4,0.1c-0.8,0-1.6,0-2.4-0.1c-0.4-0.6-0.8-1.3-1.3-2c-0.4-0.7-0.8-1.4-1.1-2.1c0.3-0.7,0.7-1.4,1.1-2.1 c0.4-0.7,0.9-1.4,1.3-2.1c0.8-0.1,1.6-0.1,2.4-0.1c0.8,0,1.6,0,2.4,0.1c0.4,0.6,0.9,1.3,1.3,2.1c0.4,0.7,0.8,1.4,1.1,2.1 C20.7,16.7,20.3,17.4,19.9,18.1z M21.7,17.5c0.3,0.7,0.5,1.4,0.7,2c-0.7,0.2-1.4,0.3-2.1,0.4c0.2-0.4,0.5-0.8,0.7-1.2 C21.3,18.4,21.5,17.9,21.7,17.5L21.7,17.5z M16.2,23.2c-0.5-0.5-1-1.1-1.4-1.7c0.5,0,1,0,1.4,0c0.5,0,1,0,1.4,0 C17.2,22.1,16.7,22.7,16.2,23.2z M12.1,20c-0.7-0.1-1.4-0.2-2.1-0.4c0.2-0.7,0.5-1.4,0.7-2c0.2,0.4,0.4,0.8,0.7,1.2 C11.7,19.2,11.9,19.6,12.1,20L12.1,20z M10.7,14.5c-0.3-0.7-0.5-1.4-0.8-2.1c0.7-0.2,1.4-0.3,2.2-0.4c-0.3,0.4-0.5,0.8-0.8,1.2 C11.2,13.7,11,14.1,10.7,14.5z M16.2,8.8c0.5,0.5,0.9,1.1,1.4,1.6c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0 C15.3,9.9,15.8,9.3,16.2,8.8z M21,13.2c-0.3-0.4-0.5-0.8-0.8-1.2c0.8,0.1,1.5,0.2,2.2,0.4c-0.2,0.7-0.5,1.4-0.8,2.1 C21.5,14.1,21.3,13.7,21,13.2z M9.4,9.5c-0.3-2.1,0-3.6,0.8-4.1c0.2-0.1,0.4-0.2,0.6-0.2c1.1,0,2.7,0.9,4.5,2.6 c-0.7,0.8-1.5,1.7-2.2,2.7c-1.2,0.1-2.4,0.3-3.5,0.6C9.5,10.6,9.4,10,9.4,9.5z M7.2,18.7C5.3,17.9,4,16.8,4,16 c0-0.9,1.2-1.9,3.1-2.7c0.5-0.2,1-0.4,1.6-0.5c0.3,1.1,0.7,2.2,1.3,3.3c-0.5,1.1-0.9,2.2-1.2,3.2C8.2,19.1,7.7,18.9,7.2,18.7 L7.2,18.7z M10.1,26.6c-0.8-0.4-1.1-2-0.8-4.1c0.1-0.5,0.2-1.1,0.3-1.7c1.1,0.2,2.2,0.4,3.4,0.5c0.7,1,1.5,1.9,2.2,2.7 c-1.8,1.7-3.4,2.6-4.5,2.6C10.5,26.7,10.3,26.6,10.1,26.6L10.1,26.6z M23.1,22.5c0.3,2.1,0,3.6-0.8,4.1c-0.2,0.1-0.4,0.2-0.6,0.2 c-1.1,0-2.7-0.9-4.5-2.6c0.8-0.8,1.5-1.7,2.2-2.7c1.2-0.1,2.4-0.3,3.4-0.5C22.9,21.4,23,21.9,23.1,22.5L23.1,22.5z M25.3,18.7 c-0.5,0.2-1,0.4-1.6,0.5c-0.3-1-0.7-2.1-1.2-3.2c0.5-1.1,0.9-2.2,1.3-3.3c0.5,0.2,1.1,0.3,1.6,0.5c1.9,0.8,3.1,1.8,3.1,2.7 C28.4,16.8,27.2,17.9,25.3,18.7L25.3,18.7z"></path>{" "}
                          <path d="M16.3,18.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S14.9,18.5,16.3,18.5z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="workStudyPanel">
                  <div className="head">
                    <div className="border">
                      <h2>Work</h2>
                    </div>

                    <hr style={{ width: "1px", backgroundColor: "black" }} />
                    <div className="border">
                      <h2>Studies</h2>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="Projocts">
                {projects.map((projects, id) => (
                  <Link to={projects.lin}>
                    <div key={id} className="mini-containers">
                      {projects.name}
                    </div>
                  </Link>
                ))}
              </div>
              <br />
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default MyLayout;
