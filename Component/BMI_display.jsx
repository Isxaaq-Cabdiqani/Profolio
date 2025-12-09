import React, { useState } from "react";
// import "../src/BMI_display.css";

function BMI_display() {
  const [name, setName] = useState("");
  const [hieght, setHieght] = useState(0);
  const [wieght, setWieght] = useState(0);
  const [result, setResult] = useState("");
  const [category, setCategory] = useState(0.0);

  function calculate() {
    const h = hieght / 100;
    const bmi = parseFloat(wieght / (h * h)).toFixed(1);

    setResult(bmi);

    if (bmi < 18.5) setCategory("Underwieght");
    else if (bmi >= 18.5 && bmi < 24.9) setCategory("Normal Wieght");
    else if (bmi >= 25 && bmi < 29.9) setCategory("Overwieght");
    else setCategory("Obese");
  }

  function reset() {
    setHieght(0);
    setWieght(0);
    setResult(0.0);
    setCategory("");
    setName("");
  }
  return (
    <div className="container" style={{ width: "300px" }}>
      <label>Name</label>
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter your name"
      />
      <br />
      <label>Hieght</label>
      <br />
      <input
        type="text"
        onChange={(e) => setHieght(e.target.value)}
        value={hieght}
        placeholder="Enter your hieght in cm"
      />
      <br />
      <label>Wieght</label>
      <br />
      <input
        type="text"
        onChange={(e) => setWieght(e.target.value)}
        value={wieght}
        placeholder="Enter your wieght in KG"
      />
      <br />
      <br />
      <button onClick={calculate}>Calculate</button>
      <br />
      {result > 0 && <button onClick={reset}>Reset</button>}
      <br />

      {result > 0 && (
        <div>
          <h4>Hi {name} her is your Result</h4>
          <p>Your BMI:{result} </p>
          <p>Category: {category} </p>
        </div>
      )}
    </div>
  );
}

export default BMI_display;
