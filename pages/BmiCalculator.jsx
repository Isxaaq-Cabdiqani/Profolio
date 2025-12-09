import React, { useState } from "react";
import BMI_display from "../Component/BMI_display";
// import "../src/BMI_display.css";

function BmiCalculator() {
  const [numOfPeopele, setNumOfPeople] = useState(0);
  const [appear, setAppear] = useState(false);
  const [disappear, setDisappear] = useState(true);

  function start() {
    setAppear(true);
    setDisappear(false);
  }

  return (
    <div>
      {disappear && (
        <div className="container_1" style={{ width: "500px" }}>
          <h2>BMI Calculator</h2>
          <h3>How many persons you want to calculate</h3>
          <br />
          <input
            type="text"
            onChange={(e) => setNumOfPeople(e.target.value)}
            value={numOfPeopele}
            placeholder="Enter a number"
          />
          <br />
          <button onClick={start}>Start</button>
        </div>
      )}

      {appear && (
        <div className="bmi-grid">
          {Array.from({ length: numOfPeopele }).map((_, index) => (
            <BMI_display key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
