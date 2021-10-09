import React  from 'react'

const Keypad = ({decimal,evaluate,reset,numbers, operators}) => {
  

    return (
        <div>
        <button
          className="element"
          id="clear"
      onClick={reset}
          
          value="AC"
        >
          AC
        </button>
        <button
          id="divide"
          onClick={operators}
          
          value="/"
        >
          /
        </button>
        <button
          id="multiply"
          onClick={operators}
          
          value="x"
        >
          x
        </button>
        <button id="seven" onClick={numbers} value="7">
          7
        </button>
        <button id="eight" onClick={numbers} value="8">
          8
        </button>
        <button id="nine" onClick={numbers} value="9">
          9
        </button>
        <button
          id="subtract"
          onClick={operators}
          
          value="‑"
        >
          ‑
        </button>
        <button id="four" onClick={numbers} value="4">
          4
        </button>
        <button id="five" onClick={numbers} value="5">
          5
        </button>
        <button id="six" onClick={numbers} value="6">
          6
        </button>
        <button
          id="add"
          onClick={operators}
          
          value="+"
        >
          +
        </button>
        <button id="one" onClick={numbers} value="1">
          1
        </button>
        <button id="two" onClick={numbers} value="2">
          2
        </button>
        <button id="three" onClick={numbers} value="3">
          3
        </button>
        <button
          className="element"
          id="zero"
          onClick={numbers}
          value="0"
        >
          0
        </button>
        <button id="decimal" onClick={decimal} value=".">
          .
        </button>
        <button
          id="equals"
          onClick={evaluate}
          
          value="="
        >
          =
        </button>
      </div>
    )
}

export default Keypad
