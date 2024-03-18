import { useState } from "react";

function MathGame(props) {
  const generateRandomNum = () => {
    return Math.floor(Math.random() * 10);
  };

  const generateRandomOperator = () => {
    //let operators = ["+", "-", "*", "/"];
    let operators = ["+", "-"];
    let randomIndex = Math.floor(Math.random() * operators.length);

    return operators[randomIndex];
  };

  const handleCheckInput = () => {
    if (Number(input) === eval(`${num1} ${operator} ${num2}`)) {
      generateNewQuestion();
    } else {
      setInput("");
    }
  };
  const generateNewQuestion = () => {
    setInput("");
    setNum1(generateRandomNum);
    setNum2(generateRandomNum);
    setOperator(generateRandomOperator);
  };
  const [num1, setNum1] = useState(generateRandomNum());
  const [num2, setNum2] = useState(generateRandomNum());
  const [operator, setOperator] = useState(generateRandomOperator());
  const [input, setInput] = useState("");

  return (
    <div className="math-wrapper wrapper-background">
      <div className="game-container">
        <div className="question-container">
          <h1>{`${num1} ${operator} ${num2}`} =</h1>
          <input
            type="text"
            className="user-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>

        <div className="submit-container">
          <button className="submit" onClick={handleCheckInput}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MathGame;
