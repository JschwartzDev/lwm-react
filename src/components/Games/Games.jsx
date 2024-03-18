import Typing from "../Typing/Typing";
import Matching from "../Matching/Matching";
import Math from "../Math/Math";

function Games(props) {
  const games = ["typing", "matching", "math"];

  if (props.currentGame === "") {
    return (
      <div className="menu-wrapper">
        {games.map((game) => (
          <button
            key={game}
            className="games-menu-btn"
            onClick={(event) => props.handleGame(game)}
          >
            {game}
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
  }
}

export default Games;
