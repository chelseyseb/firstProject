import React, { useState } from 'react';

export default function Calculator() {
  const styles = {
    calculator: {
      marginTop: "20px",
      width: "400px",
      height: "600px",
    },
    
    screen: {
      height: "80px",
    },
    
    buttons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "20px",
    },
    input: {
      width: "45%",
      padding: "20px",
      height: "100%",
      fontSize: "24px",
      marginLeft: "20px",
    },
    answer: {
      width: "44%",
      padding: "20px",
      height: "100%",
      fontSize: "24px",
      marginLeft: "5px",
    },
    button: {
      width: "90px",
      height: "90px",
      fontSize: "24px",
      marginBottom: "10px",
    },
    buttonEquals: {
      width: "360px",
      height: "90px",
      fontSize: "24px",
      marginBottom: "10px",
    },
  }
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const evaluateExpression = (expr) => {
    let result;
    try {
      result = new Function('return ' + expr)();
    } catch (error) {
      result = "Math Error";
    }
    return result;
  };
  
  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "=":
        const result = evaluateExpression(input);
        setResult(result.toString());
        break;
      case "C":
        setInput("");
        setResult("");
        break;
      default:
        setInput(input + value);
        break;
    }
  };  

  return (
    <div className="calculator" style={styles.calculator}>
  <div className="screen"style={styles.screen}>
    <input style={styles.input} type="text" value={input} placeholder="0" />
    <input style={styles.answer} type="text" value={"= " + result} placeholder="0" />
  </div>
  <div className="buttons" style={styles.buttons}>
    <div className="row">
      <button value="7" onClick={handleClick} style={styles.button}>7</button>
      <button value="8" onClick={handleClick} style={styles.button}>8</button>
      <button value="9" onClick={handleClick} style={styles.button}>9</button>
      <button value="+" onClick={handleClick} style={styles.button}>+</button>
    </div>
    <div className="row">
      <button value="4" onClick={handleClick} style={styles.button}>4</button>
      <button value="5" onClick={handleClick} style={styles.button}>5</button>
      <button value="6" onClick={handleClick} style={styles.button}>6</button>
      <button value="-" onClick={handleClick} style={styles.button}>-</button>
    </div>
    <div className="row">
      <button value="1" onClick={handleClick} style={styles.button}>1</button>
      <button value="2" onClick={handleClick} style={styles.button}>2</button>
      <button value="3" onClick={handleClick} style={styles.button}>3</button>
      <button value="*" onClick={handleClick}style={styles.button}>*</button>
    </div>
    <div className="row">
      <button value="0" onClick={handleClick} style={styles.button}>0</button>
      <button value="." onClick={handleClick} style={styles.button}>.</button>
      <button value="/" onClick={handleClick} style={styles.button}>/</button>
      <button value="C" onClick={handleClick} style={styles.button}>C</button>
      
    </div>
    <div className="row">
      <button value="=" onClick={handleClick} style={styles.buttonEquals}>=</button>
    </div>
  </div>
</div>

  );
}


