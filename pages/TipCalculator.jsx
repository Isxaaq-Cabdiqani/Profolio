import { useState } from "react";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [quality, setQuality] = useState();
  const [result, setResult] = useState();
  const [calculated, setCalculated] = useState(false);

  function Calculate() {
    setResult((billAmount * quality) / 100 + billAmount);
    setCalculated(true);

    setBillAmount(0);
    setQuality(undefined);
  }
  function reset() {
    setCalculated(false);
    setResult(undefined);
    setBillAmount(0);
    setQuality(undefined);
  }
  return (
    <>
      <div className="TipContainer">
        <h2>Tip calculator</h2>
        <label>Billl amount: </label>
        <input
          type="number"
          min={0}
          onChange={(e) => setBillAmount(Number(e.target.value))}
          value={billAmount}
        />
        <br />
        <label>Quality:</label>
        <br />
        <div className="qualityContainer">
          <input
            type="radio"
            name="quality"
            id=""
            value={20}
            checked={quality === 20}
            onChange={(e) => setQuality(Number(e.target.value))}
          />
          <label>Best 20%</label>
          <br />
          <input
            type="radio"
            name="quality"
            id=""
            value={10}
            checked={quality === 10}
            onChange={(e) => setQuality(Number(e.target.value))}
          />
          <label>Normal 10%</label>
          <br />
          <input
            type="radio"
            name="quality"
            id=""
            value={5}
            checked={quality === 5}
            onChange={(e) => setQuality(Number(e.target.value))}
          />
          <label>Bad 5%</label>
        </div>
        <br />
        <button onClick={Calculate}>Calculate</button>
        {calculated && <button onClick={reset}>Reset</button>}
        <br />
        {calculated && (
          <div className="result_container">
            <strong>Your total bill is: {result}</strong>
          </div>
        )}
      </div>
    </>
  );
}

export default TipCalculator;
