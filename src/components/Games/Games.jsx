import Typing from "../Typing/Typing";
import Matching from "../Matching/Matching";
import Math from "../Math/Math";
import Maze from "../Maze/Maze";

function Games(props) {
  const games = ["typing", "matching", "math", "maze"];

  const capitalizeFirstLetter = (str) => {
    let arr = Array.from(str);
    let capital = arr[0].toUpperCase();
    arr.shift();
    arr = [capital, ...arr];
    return arr.join("");
  };

  if (props.currentGame === "") {
    return (
      <div className="menu-wrapper wrapper-background">
        {games.map((game) => (
          <button
            key={game}
            className="games-menu-btn"
            onClick={(event) => props.handleGame(game)}
          >
            {capitalizeFirstLetter(game)}
          </button>
        ))}
      </div>
    );
  } else if (props.currentGame === "typing") {
    return <Typing />;
  } else if (props.currentGame === "matching") {
    return <Matching />;
  } else if (props.currentGame === "math") {
    return <Math />;
  } else if (props.currentGame === "maze") {
    return <Maze />;
  }
}

export default Games;
