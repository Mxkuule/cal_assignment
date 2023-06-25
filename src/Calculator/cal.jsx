import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case "=":
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      case "C":
        setInput("");
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="container">
      <div className="calculator dark">
        <input
          type="text"
          className="bg-gray-700 w-full mb-2 px-2 py-1 rounded-md text-right text-white"
          placeholder="0"
          value={input}
          readOnly
        />

        <div className="display-screen">
          <div id="display"></div>
        </div>

        <div className="buttons">
          <table>
            <tr>
              <td>
                <button
                  className="btn-operator"
                  value="C"
                  onClick={handleClick}
                >
                  C
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="/"
                  onClick={handleClick}
                >
                  /
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="*"
                  onClick={handleClick}
                >
                  x
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="."
                  onClick={handleClick}
                >
                  .
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button className="btn-number" value="7" onClick={handleClick}>
                  7
                </button>
              </td>
              <td>
                <button className="btn-number" value="8" onClick={handleClick}>
                  8
                </button>
              </td>
              <td>
                <button className="btn-number" value="9" onClick={handleClick}>
                  9
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="-"
                  onClick={handleClick}
                >
                  -
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button className="btn-number" value="4" onClick={handleClick}>
                  4
                </button>
              </td>
              <td>
                <button className="btn-number" value="5" onClick={handleClick}>
                  5
                </button>
              </td>
              <td>
                <button className="btn-number" value="6" onClick={handleClick}>
                  6
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn-operator"
                  value="+"
                  onClick={handleClick}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-number" value="1" onClick={handleClick}>
                  1
                </button>
              </td>
              <td>
                {" "}
                <button className="btn-number" value="2" onClick={handleClick}>
                  2
                </button>
              </td>
              <td>
                <button className="btn-number" value="3" onClick={handleClick}>
                  3
                </button>
              </td>
              <td rowspan="2">
                <button className="btn-equal" value="=" onClick={handleClick}>
                  =
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button
                  className="btn-operator"
                  value="("
                  onClick={handleClick}
                >
                  (
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="0"
                  onClick={handleClick}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  className="btn-operator"
                  value="("
                  onClick={handleClick}
                >
                  )
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
