import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
                                    
if (value === "AC")
     {
     setInput("");
     setResult("");
    }else if(value === "DEL") 
    {
    setInput(input.slice(0, -1));
    } else if (value === "=") {
    try {
        setResult(eval(input).toString()); 
    } catch (err) {
        setResult(err);
        alert('cannot perform operation',err)
    }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container" style={{ marginTop: '300px' }}>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 border rounded d-flex justify-content-center bg-warning mx-5">
          <div className="px-3 py-2">
            <input  style={{height: '50px',width: '400px',marginTop: '50px',backgroundColor: 'black',color: 'white',textAlign: 'right'}}type="text" value={result || input} placeholder="0" readOnly/>
            <div className="m-3">
              <div className="row justify-content-between mb-3">
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("AC")}>AC</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("DEL")}>DEL</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("/")}> /</Button>
                
              </div>
              <div className="row justify-content-between mb-3">
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("9")}>9</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("8")}>8</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("7")}>7</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("*")}>*</Button>
              </div>
              <div className="row justify-content-between mb-3">
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("6")}>6</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("5")}>5</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("4")}>4</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("+")}>+</Button>
              </div>
              <div className="row justify-content-between mb-3">
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("3")}>3</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("2")}>2 </Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("1")}>1</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("-")}></Button>
              </div>
              <div className="row justify-content-between mb-3">
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("0")}>0</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick(".")}>.</Button>
                <Button style={{ width: '80px' }} variant="light" onClick={() => handleButtonClick("=")}>=</Button>
              </div>
    </div>
    </div>
  </div>
<div className="col-lg-4"></div>
</div>
</div>
  );
};

export default Calculator;
