import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const sightWords = [
  "A",
  "An",
  "At",
  "Are",
  "As",
  "And",
  "All",
  "About",
  "After",
  "Be",
  "By",
  "But",
  "Been",
  "Can",
  "Could",
  "Called",
  "Did",
  "Down",
  "Do",
  "Each",
  "From",
  "First",
  "Find",
  "For",
  "He",
  "His",
  "Had",
  "How",
  "Has",
  "Her",
  "Have",
  "Him",
  "In",
  "I",
  "If",
  "Into",
  "Is",
  "It",
  "Its",
  "Just",
  "Know",
  "Like",
  "Long",
  "Little",
  "My",
  "Made",
  "May",
  "Make",
  "More",
  "Many",
  "Most",
  "Not",
  "No",
  "Now",
  "Or",
  "One",
  "Of",
  "Out",
  "Other",
  "Over",
  "Only",
  "On",
  "People",
  "Said",
  "She",
  "Some",
  "So",
  "See",
  "The",
  "To",
  "They",
  "This",
  "There",
  "Them",
  "Then",
  "These",
  "Two",
  "Time",
  "Than",
  "That",
  "Their",
  "Up",
  "Use",
  "Very",
  "Was",
  "With",
  "What",
  "Were",
  "When",
  "We",
  "Which",
  "Will",
  "Would",
  "Words",
  "Where",
  "Water",
  "Who",
  "Way",
  "You",
  "Your",
];

function Typing() {
  let rand = Math.floor(Math.random() * 100);
  const [word, setWord] = useState(sightWords[rand]);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [previousWords, setPreviousWords] = useState([]);

  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleNextWord = (input, word) => {
    console.log(`Input: ${input}, Word: ${word}`);
    if (previousWords.length < 1) {
      setPreviousWords([...previousWords, word]);
    } else {
      if (previousWords.indexOf(input) === -1) {
        setPreviousWords([...previousWords, word]);
      }
    }
    if (input === word) {
      setCorrect((count) => {
        setInput("");
        return count + 1;
      });
    } else {
      setSkipped((count) => {
        setInput("");
        return count + 1;
      });
    }
    setWord(() => {
      return sightWords[getRandom()];
    });
  };

  const handlePreviousWord = (event) => {
    if (previousWords.indexOf(event.target.value) === -1) {
      setPreviousWords([...previousWords, event.target.value]);
      setWord(previousWords[previousWords.length - 1]);
    } else {
      let position = previousWords.indexOf(word);
      if (position) {
        setWord(previousWords[position - 1]);
      }
    }
  };

  return (
    <div className="typing-wrapper">
      <div className="game-wrapper">
        <div
          className="typing-nav-btn"
          onClick={(event) => handlePreviousWord(event)}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </div>
        <div className="game-content-wrapper">
          <div className="stats">
            <span>Correct: {correct}</span>
            <span>Skipped: {skipped}</span>
          </div>
          <div className="typing-word-div">{word}</div>
          <div className="typing-input-div">
            <input
              type="text"
              id="typing-input"
              className="typing-input"
              value={input}
              onChange={(event) => {
                if (event.target.value === word) {
                  setInput("");
                  handleNextWord(event.target.value, word);
                } else {
                  if (word.indexOf(event.target.value) === -1) {
                    setInput(event.target.value.substring(0, input.length));
                  } else if (word.indexOf(event.target.value) === 0) {
                    setInput(event.target.value);
                  }
                }
              }}
            />
          </div>
        </div>
        <div
          className="typing-nav-btn"
          onClick={() => handleNextWord(input, word)}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </div>
      </div>
    </div>
  );
}

export default Typing;
