import { useState, useMemo } from "react";
import sonicTrimmed from "../../Assets/sonic-trimmed.png";

const cards = [
  {
    content: "Emit",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Emit",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Mumma",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Mumma",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Daddy",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Daddy",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Uncle Mike",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Uncle Mike",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Auntie Ashley",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Auntie Ashley",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Damien",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Damien",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Uncle Trevor",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Uncle Trevor",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Tio Kike",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
  {
    content: "Tio Kike",
    cardBack: sonicTrimmed,
    flipped: false,
    matched: false,
  },
];

function Matching() {
  //shuffle the deck
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const shuffledCards = useMemo(() => {
    cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
    });
    return shuffle(cards);
  }, []);

  const [trigger, setTrigger] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState(shuffledCards);

  const handleCheckFlippedCards = (flipped) => {
    //if 2 flipped cards, run comparisons
    if (flipped.length === 2) {
      //grab the flipped cards position in the shuffled cards list to be used for later
      let firstIndex = shuffledCards.indexOf(flipped[0]);
      let secondIndex = shuffledCards.indexOf(flipped[1]);

      //if cards.content are equal, set cards.matched to true
      if (flipped[0].content === flipped[1].content) {
        shuffledCards[firstIndex].matched = true;
        shuffledCards[secondIndex].matched = true;
        //clear flipped array
        flipped = [];
        //check if there are any cards left on screen by filtering only cards that arent matched yet
        let matches = shuffledCards.filter((card) => !card.matched);
        //if all cards have been matched
        if (matches.length === 0) {
          //set all cards back to default state of flipped and matched
          shuffledCards.forEach((card) => {
            card.flipped = false;
            card.matched = false;
          });
          //reshuffle the deck and set state of the deck
          setShuffledDeck(shuffle(shuffledCards));
          //console.log(shuffledDeck);
        }
      } else {
        //if flipped[0].content !== flipped[1].content set both cards .flipped to false
        shuffledCards[firstIndex].flipped = false;
        shuffledCards[secondIndex].flipped = false;
        //reset flipped array
        flipped = [];
      }
    }
  };

  const handleFlipCard = (index) => {
    shuffledCards[index].flipped = !shuffledCards[index].flipped;
    let flipped = shuffledCards.filter((card) => card.flipped && !card.matched);

    handleCheckFlippedCards(flipped);

    //cant tell what this does anymore but if i remove it it breaks
    setTrigger((trigger) => {
      setShuffledDeck(shuffledCards);
      return trigger === 0 ? 1 : 0;
    });
  };

  return (
    <div className="matching-wrapper wrapper-background">
      <div className="matching-game-container">
        {shuffledDeck.map((card, index) => {
          return (
            <div
              onClick={() => handleFlipCard(index)}
              key={index}
              className={
                card.flipped ? "flip-card flip-card-flip" : "flip-card"
              }
              style={card.matched ? { opacity: "0" } : {}}
            >
              <div className="flip-card-inner">
                <div className="flip-card-back">
                  <img
                    src={sonicTrimmed}
                    className="flip-card-image"
                    alt="sonic"
                  />
                </div>
                <div className="flip-card-front">
                  <div className="flip-card-front-background">
                    <h1>{card.flipped ? card.content : ""}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Matching;
