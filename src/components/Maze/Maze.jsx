import { useState, useRef } from "react";

function Maze() {
  let levels = [];

  const lvl1 = {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 9,
      y: 3,
    },
    goal: {
      x: 9,
      y: 5,
      following: [0],
    },
    end: {
      x: 11,
      y: 12,
    },
  };

  const lvl2 = {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 1,
      y: 0,
    },
    goal: {
      x: 7,
      y: 3,
      following: [1, 0],
    },
    end: {
      x: 11,
      y: 12,
    },
  };

  const lvl3 = {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 1,
      y: 0,
    },
    goal: {
      x: 9,
      y: 3,
      following: [1, 1, 0],
    },
    end: {
      x: 11,
      y: 12,
    },
  };

  const lvl4 = {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 11,
      y: 10,
    },
    goal: {
      x: 9,
      y: 3,
      following: [1, 1, 1],
    },
    end: {
      x: 11,
      y: 12,
    },
  };

  //add levels to levels array
  levels[0] = lvl1;
  levels[1] = lvl2;
  levels[2] = lvl3;
  levels[3] = lvl4;

  //set state
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(levels[levelIndex]);
  const [trigger, setTrigger] = useState(0);

  //compares the more request coords to the current set of legal moves
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

  //simple checks if player is clicking on himself - only matters when using click to move
  const checkIfCurrentPosition = (moveRequest, playerPosition) => {
    return (
      moveRequest.x === playerPosition.x && moveRequest.y === playerPosition.y
    );
  };

  //checks if the player is at the end of the maze
  const checkPlayerNextToGoal = (moveRequest, adjacentToGoal) => {
    for (let key in adjacentToGoal) {
      if (
        adjacentToGoal[key].x === moveRequest.x &&
        adjacentToGoal[key].y === moveRequest.y
      ) {
        return true;
      }
    }
  };

  //a bunch of bullshit
  const handleMove = (event) => {
    //if player clicked himself then do nothing
    if (event.target.className.includes("player")) {
      return;
    }
    //coordinates are passed via className attr (I can't believe im doing this)
    const { className } = event.target;

    //grab references to player, goal and end
    const playerPosition = level.player;
    const goalPosition = level.goal;
    const endPosition = level.end;

    //get indeces relative to separator ":"due to varying length of values
    let separatorIndex = className.indexOf(":");
    let rowIndex = className.substring(separatorIndex - 2, separatorIndex);
    let columnIndex = className.substring(separatorIndex + 1);

    //create moveReq object with x and y coords of move
    const moveReq = {
      x: Number(rowIndex),
      y: Number(columnIndex),
    };

    //check if we are requesting to move to where we already are, do nothing if so
    if (checkIfCurrentPosition(moveReq, playerPosition)) {
      return;
    }

    //build an object of moves in range 1 for player
    const moves = {
      up: {
        x: playerPosition.x - 1,
        y: playerPosition.y,
      },

      down: {
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

    //build object for all positions adjacent to goal
    const positionsAdjacentToGoal = {
      up: {
        x: goalPosition.x - 1,
        y: goalPosition.y,
      },

      down: {
        x: goalPosition.x + 1,
        y: goalPosition.y,
      },

      left: {
        x: goalPosition.x,
        y: goalPosition.y - 1,
      },

      right: {
        x: goalPosition.x,
        y: goalPosition.y + 1,
      },
    };

    const follower1Moves = {
      up: {
        x: playerPosition.x,
        y: playerPosition.y,
      },

      down: {
        x: playerPosition.x,
        y: playerPosition.y,
      },

      left: {
        x: playerPosition.x,
        y: playerPosition.y,
      },

      right: {
        x: playerPosition.x,
        y: playerPosition.y,
      },
    };

    //grab reference to the grid
    const { grid } = level;

    //check if requested tile is an empty tile, not a wall tile
    if (!grid[moveReq.x][moveReq.y]) {
      console.log(`Requested tile: {x: ${moveReq.x}, y: ${moveReq.y}}`);

      //compare the moveReq to the legal moves
      if (comparePositions(moveReq, moves)) {
        //check if requested tile is the end of the level
        if (moveReq.x === endPosition.x && moveReq.y === endPosition.y) {
          setTrigger((trigger) => {
            setLevelIndex((index) => {
              setLevel(levels[index + 1]);
              return index + 1;
            });

            return trigger === 0 ? 1 : 0;
          });
        }
        //grab players move
        let directionMoved = "";
        for (let key in moves) {
          if (moves[key].x === moveReq.x && moves[key].y === moveReq.y) {
            directionMoved = key;
            console.log(key);
          }
        }

        //check to see if goal is already following player
        if (!level.goal.following[0]) {
          //check to see if player is next to the goal
          if (checkPlayerNextToGoal(moveReq, positionsAdjacentToGoal)) {
            //tell goal to follow player
            let updateFollowingStatus = level;
            updateFollowingStatus.goal.following[0] = 1;
            setLevel(updateFollowingStatus);
          }
        }

        //if goal is following
        if (level.goal.following[0]) {
          //follow player works by updating and not rerendering, will rerender on
          //next move... for some reason this is the smoothest way to do it
          console.log(directionMoved, "while following");
          let updateGoalPosition = level;
          updateGoalPosition.goal.x = follower1Moves[directionMoved].x;
          updateGoalPosition.goal.y = follower1Moves[directionMoved].y;
        }

        //create new level config updating player position
        let config = level;
        config.player.x = moveReq.x;
        config.player.y = moveReq.y;

        //use trigger to cause double rerender? i think?
        setTrigger((trigger) => {
          setLevel(config);
          return trigger === 0 ? 1 : 0;
        });
      }
    }
  };
  const handleKeyPress = (event) => {
    //creating a custom event to pass into handleMove()
    let customEvent = { target: { className: "" } };

    if (event.key === "w") {
      customEvent.target.className = level.player.x - 1 + ":" + level.player.y;
      console.log(customEvent);
      handleMove(customEvent);
    }

    if (event.key === "s") {
      customEvent.target.className = level.player.x + 1 + ":" + level.player.y;
      console.log(customEvent);
      handleMove(customEvent);
    }

    if (event.key === "a") {
      customEvent.target.className =
        level.player.x + ":" + Number(level.player.y - 1);
      console.log(customEvent);
      handleMove(customEvent);
    }
    if (event.key === "d") {
      customEvent.target.className =
        level.player.x + ":" + Number(level.player.y + 1);
      console.log(customEvent);
      handleMove(customEvent);
    }
  };

  const gameRef = useRef(null);

  return (
    <div className="maze-wrapper wrapper-background">
      <div className="game-wrapper">
        <div
          className="map rotate"
          ref={gameRef}
          tabIndex={-1}
          onKeyDown={(event) => handleKeyPress(event)}
          onClick={(event) => handleKeyPress(event)}
        >
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
                          <div className={`goal ${i}:${j}`}></div>
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
