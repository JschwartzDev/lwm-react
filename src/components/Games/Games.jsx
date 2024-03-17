import Typing from "../Typing/Typing";
import Matching from "../Matching/Matching";

function Games(props) {
  const games = ["typing", "matching"];

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
  }
}

export default Games;
