import { useState } from "react";
import motoPicSonic from "../../Assets/moto-pic-sonic.png";
import motoPicShadow from "../../Assets/moto-pic-shadow.png";

function MathGame() {
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
    if (Number(input) === eval(setQuestion())) {
      setIsCorrect(true);
      generateNewQuestion();
    } else {
      setIsCorrect(false);
      setInput("");
    }
  };
  const generateNewQuestion = () => {
    setInput("");
    setNum1(generateRandomNum);
    setNum2(generateRandomNum);
    setOperator(generateRandomOperator);
  };

  const setQuestion = () => {
    if (num1 > num2) {
      return `${num1} ${operator} ${num2}`;
    } else {
      return `${num2} ${operator} ${num1}`;
    }
  };
  const [num1, setNum1] = useState(generateRandomNum());
  const [num2, setNum2] = useState(generateRandomNum());
  const [operator, setOperator] = useState(generateRandomOperator());
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState();

  return (
    <div className="math-wrapper wrapper-background">
      <div className="motivational-pic">
        <img
          src={motoPicSonic}
          alt="sonic"
          className="moto-image"
          style={isCorrect ? {} : { display: "none" }}
        />
      </div>
      <div className="game-container">
        <div className="question-container">
          <h1>{setQuestion()} =</h1>
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
      <div className="motivational-pic">
        <img
          src={motoPicShadow}
          alt="sonic"
          className="moto-image"
          style={!isCorrect ? {} : { display: "none" }}
        />
      </div>
    </div>
  );
}

export default MathGame;
