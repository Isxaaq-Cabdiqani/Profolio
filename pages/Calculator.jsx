import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [resultDis, setResultDis] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  function click(value) {
    const newDis = display + value;
    setDisplay(newDis);
    try {
      const result = eval(newDis);
      setResultDis(String(result));
    } catch {
      setResultDis("");
    }
  }

  function calculate() {
    try {
      const result = eval(display);
      setHistory((p) => [...p, display + "=" + result]);
      setDisplay(String(result));
      setResultDis("");
    } catch {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
    setResultDis("");
  }

  function showHis() {
    setShowHistory((p) => !p);
  }

  function erase() {
    setDisplay((p) => p.slice(0, -1));

    try {
      const result = eval(display.slice(0, -1));
      setResultDis(String(result));
    } catch {
      setResultDis("");
    }
  }
  return (
    <>
      <div className="main_container">
        <div className="display_container">
          <input
            type="text"
            value={display}
            readOnly
            className="first display"
          />
          {/* <br /> */}
          <input
            type="text"
            value={resultDis}
            readOnly
            className="second display"
          />
        </div>
        <div className="btn_container">
          <div className="button_container">
            <button onClick={showHis} style={{ borderRadius: "0px" }}>
              H
            </button>
            <button onClick={clear} style={{ borderRadius: "0px" }}>
              C
            </button>
            <button onClick={erase} style={{ borderRadius: "0px" }}>
              E
            </button>
            <button style={{ borderRadius: "0px" }}></button>
          </div>
          <div className="button_container">
            <button onClick={() => click("7")} style={{ borderRadius: "0px" }}>
              7
            </button>
            <button onClick={() => click("8")} style={{ borderRadius: "0px" }}>
              8
            </button>
            <button onClick={() => click("9")} style={{ borderRadius: "0px" }}>
              9
            </button>
            <button onClick={() => click("/")} style={{ borderRadius: "0px" }}>
              /
            </button>
          </div>
          <div className="button_container">
            <button onClick={() => click("4")} style={{ borderRadius: "0px" }}>
              4
            </button>
            <button onClick={() => click("5")} style={{ borderRadius: "0px" }}>
              5
            </button>
            <button onClick={() => click("6")} style={{ borderRadius: "0px" }}>
              6
            </button>
            <button onClick={() => click("*")} style={{ borderRadius: "0px" }}>
              x
            </button>
          </div>
          <div className="button_container">
            <button onClick={() => click("1")} style={{ borderRadius: "0px" }}>
              1
            </button>
            <button onClick={() => click("2")} style={{ borderRadius: "0px" }}>
              2
            </button>
            <button onClick={() => click("3")} style={{ borderRadius: "0px" }}>
              3
            </button>
            <button onClick={() => click("-")} style={{ borderRadius: "0px" }}>
              -
            </button>
          </div>
          <div className="button_container">
            <button onClick={() => click(".")} style={{ borderRadius: "0px" }}>
              .
            </button>
            <button onClick={() => click("0")} style={{ borderRadius: "0px" }}>
              0
            </button>
            <button onClick={calculate} style={{ borderRadius: "0px" }}>
              =
            </button>
            <button onClick={() => click("+")} style={{ borderRadius: "0px" }}>
              +
            </button>
          </div>
        </div>

        {showHistory && (
          <div className={showHistory ? "active-history" : "unactive-history"}>
            <h3>history</h3>
            <ul>
              {history.map((item, index) => (
                <div className="history_box" key={index}>
                  {item}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Calculator;
