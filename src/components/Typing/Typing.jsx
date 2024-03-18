import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const sightWords = [
  "a",
  "an",
  "at",
  "are",
  "as",
  "and",
  "all",
  "about",
  "after",
  "be",
  "by",
  "but",
  "been",
  "can",
  "could",
  "called",
  "did",
  "down",
  "do",
  "each",
  "from",
  "first",
  "find",
  "for",
  "he",
  "his",
  "had",
  "how",
  "has",
  "her",
  "have",
  "him",
  "in",
  "i",
  "if",
  "into",
  "is",
  "it",
  "its",
  "just",
  "know",
  "like",
  "long",
  "little",
  "my",
  "made",
  "may",
  "make",
  "more",
  "many",
  "most",
  "not",
  "no",
  "now",
  "or",
  "one",
  "of",
  "out",
  "other",
  "over",
  "only",
  "on",
  "people",
  "said",
  "she",
  "some",
  "so",
  "see",
  "the",
  "to",
  "they",
  "this",
  "there",
  "them",
  "then",
  "these",
  "two",
  "time",
  "than",
  "that",
  "their",
  "up",
  "use",
  "very",
  "was",
  "with",
  "what",
  "were",
  "when",
  "we",
  "which",
  "will",
  "would",
  "words",
  "where",
  "water",
  "who",
  "way",
  "you",
  "your",
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
    <div className="typing-wrapper wrapper-background">
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
