import { useState } from "react";

function Maze() {
  const lvl1 = {
    grid: [
      [0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0, 0],
    ],
    player: {
      x: 5,
      y: 1,
    },
    goal: {
      x: 2,
      y: 5,
    },
  };

  const lvl2 = {
    grid: [
      [0, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 0, 0, 1, 0, 0],
    ],
    player: {
      x: 0,
      y: 0,
    },
    goal: {
      x: 5,
      y: 5,
    },
  };

  const [level, setLevel] = useState(lvl2);
  const [trigger, setTrigger] = useState(0);

  const comparePositions = (moveRequest, legalMoves) => {
    for (let key in legalMoves) {
      if (
        legalMoves[key].x === moveRequest.x &&
        legalMoves[key].y === moveRequest.y
      ) {
        return true;
      }
    }
  };

  const checkIfCurrentPosition = (moveRequest, playerPosition) => {
    return (
      moveRequest.x === playerPosition.x && moveRequest.y === playerPosition.y
    );
  };

  const handleMove = (event) => {
    if (event.target.className.includes("player")) {
      return;
    }
    //coordinates are passed via className attr
    const { className } = event.target;
    const length = className.length;
    const playerPosition = level.player;
    //create moveReq object with x and y coords of move
    const moveReq = {
      x: Number(className.substring(length - 2, length - 3)),
      y: Number(className.substring(length - 1)),
    };

    if (checkIfCurrentPosition(moveReq, playerPosition)) {
      return;
    }
    console.log(moveReq, playerPosition);

    //build an object of moves in range 1 for player
    const moves = {
      forward: {
        x: playerPosition.x - 1,
        y: playerPosition.y,
      },

      backward: {
        x: playerPosition.x + 1,
        y: playerPosition.y,
      },

      left: {
        x: playerPosition.x,
        y: playerPosition.y - 1,
      },

      right: {
        x: playerPosition.x,
        y: playerPosition.y + 1,
      },
    };

    //grab reference to the grid
    const { grid } = level;

    //check if move is legal by checking if location of request is a wall-tile
    if (!grid[moveReq.x][moveReq.y]) {
      console.log("is empty tile");

      //compare the moveReq to the legal moves
      if (comparePositions(moveReq, moves)) {
        console.log("is legal move");
        console.log(moveReq, moves);
        let config = level;
        config.player.x = moveReq.x;
        config.player.y = moveReq.y;

        setTrigger((trigger) => {
          setLevel(config);
          return trigger === 0 ? 1 : 0;
        });
      }
    }
  };

  return (
    <div className="maze-wrapper">
      <div className="game-wrapper">
        <div className="map rotate">
          {level.grid.map((row, i) => {
            return (
              <div className="map-row" key={i}>
                {row.map((tile, j) => {
                  if (!tile) {
                    return (
                      <div
                        className={`tile empty-tile ${i}:${j}`}
                        key={`${i}:${j}`}
                        onClick={(event) => handleMove(event)}
                      >
                        {level.player.x === i && level.player.y === j ? (
                          <div className="player"></div>
                        ) : level.goal.x === i && level.goal.y === j ? (
                          <div className="goal"></div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <div className={`tile wall-tile ${i}:${j}`} key={j}></div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Maze;
