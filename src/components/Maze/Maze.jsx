import { text } from "@fortawesome/fontawesome-svg-core";
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
      x: 1,
      y: 0,
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
    level: 1,
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
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 1,
      y: 1,
    },
    goal: {
      x: 7,
      y: 3,
      following: [1, 0],
    },
    tails: {
      x: 1,
      y: 0,
    },
    knuckles: {
      x: 7,
      y: 3,
    },
    end: {
      x: 11,
      y: 12,
    },
    level: 2,
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
      y: 2,
    },
    goal: {
      x: 9,
      y: 3,
      following: [1, 1, 0],
    },
    tails: {
      x: 1,
      y: 1,
    },
    knuckles: {
      x: 1,
      y: 0,
    },
    end: {
      x: 11,
      y: 12,
    },
    level: 3,
  };

  const lvl4 = {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 11,
      y: 6,
    },
    goal: {
      x: 6,
      y: 6,
      following: [1, 1, 1],
    },
    tails: {
      x: 11,
      y: 5,
    },
    knuckles: {
      x: 11,
      y: 4,
    },
    shadow: {
      x: 11,
      y: 3,
    },
    end: {
      x: 6,
      y: 6,
    },
    level: 4,
  };

  const lvl5 = {
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
      y: 6,
    },
    goal: {
      x: 30,
      y: 30,
      following: [0, 0, 0],
    },
    tails: {
      x: 3,
      y: 3,
    },
    knuckles: {
      x: 4,
      y: 2,
    },
    shadow: {
      x: 5,
      y: 10,
    },
    end: {
      x: 30,
      y: 30,
    },
    nearTails: false,
    nearShadow: false,
    level: 4,
  };

  //add levels to levels array
  levels[0] = lvl1;
  levels[1] = lvl2;
  levels[2] = lvl3;
  levels[3] = lvl4;
  levels[4] = lvl5;

  //set state
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(levels[levelIndex]);
  const [trigger, setTrigger] = useState(0);

  const gameRef = useRef(null);
  const tailsRef = useRef(null);
  const knucklesRef = useRef(null);
  const shadowRef = useRef(null);
  const eggmanRef = useRef(null);
  const sonicRef = useRef(null);

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

  //simple check if player is clicking on himself - only matters when using click to move
  const checkIfCurrentPosition = (moveRequest, playerPosition) => {
    return (
      moveRequest.x === playerPosition.x && moveRequest.y === playerPosition.y
    );
  };

  //checks if the player is next to the goal of the level
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

    const follower2Moves = {
      up: {
        x: follower1Moves["up"].x + 1,
        y: follower1Moves["up"].y,
      },

      down: {
        x: follower1Moves["down"].x - 1,
        y: follower1Moves["down"].y,
      },

      left: {
        x: follower1Moves["left"].x,
        y: follower1Moves["left"].y + 1,
      },

      right: {
        x: follower1Moves["right"].x,
        y: follower1Moves["right"].y - 1,
      },
    };

    const follower3Moves = {
      up: {
        x: follower2Moves["up"].x + 1,
        y: follower2Moves["up"].y,
      },

      down: {
        x: follower2Moves["down"].x - 1,
        y: follower2Moves["down"].y,
      },

      left: {
        x: follower2Moves["left"].x,
        y: follower2Moves["left"].y + 1,
      },

      right: {
        x: follower2Moves["right"].x,
        y: follower2Moves["right"].y - 1,
      },
    };

    //grab reference to the grid
    const { grid } = level;

    //check if requested tile is an empty tile, not a wall tile
    if (!grid[moveReq.x][moveReq.y]) {
      //compare the moveReq to the legal moves
      if (comparePositions(moveReq, moves)) {
        //check if requested tile is the end of the level
        if (moveReq.x === endPosition.x && moveReq.y === endPosition.y) {
          setTrigger((trigger) => {
            setLevelIndex((index) => {
              if (index + 1 === 4) {
                eggmanRef.current.className = "";
              }
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
          }
        }

        if (level.level === 2) {
          let config = level;
          config.player.x = moveReq.x;
          config.player.y = moveReq.y;
          config.tails.x = follower1Moves[directionMoved].x;
          config.tails.y = follower1Moves[directionMoved].y;
          if (level.goal.following[1]) {
            config.goal.x = follower2Moves[directionMoved].x;
            config.goal.y = follower2Moves[directionMoved].y;
          }

          //use trigger to cause double rerender? i think?
          setTrigger((trigger) => {
            setLevel(config);
            return trigger === 0 ? 1 : 0;
          });
          setTrigger((trigger) => {
            return trigger === 1 ? 0 : 1;
          });
        }

        if (level.level === 3) {
          let config = level;
          config.player.x = moveReq.x;
          config.player.y = moveReq.y;
          config.tails.x = follower1Moves[directionMoved].x;
          config.tails.y = follower1Moves[directionMoved].y;
          config.knuckles.x = follower2Moves[directionMoved].x;
          config.knuckles.y = follower2Moves[directionMoved].y;

          //use trigger to cause double rerender? i think?
          setTrigger((trigger) => {
            setLevel(config);
            return trigger === 0 ? 1 : 0;
          });
          setTrigger((trigger) => {
            return trigger === 1 ? 0 : 1;
          });
        }

        if (level.level === 4) {
          let config = level;
          config.player.x = moveReq.x;
          config.player.y = moveReq.y;
          config.tails.x = follower1Moves[directionMoved].x;
          config.tails.y = follower1Moves[directionMoved].y;
          config.knuckles.x = follower2Moves[directionMoved].x;
          config.knuckles.y = follower2Moves[directionMoved].y;
          config.shadow.x = follower3Moves[directionMoved].x;
          config.shadow.y = follower3Moves[directionMoved].y;
          //use trigger to cause double rerender? i think?
          setTrigger((trigger) => {
            setLevel(config);
            return trigger === 0 ? 1 : 0;
          });
          setTrigger((trigger) => {
            return trigger === 1 ? 0 : 1;
          });
        }

        //check to see if goal is already following player
        if (!level.goal.following[level.level - 1]) {
          //check to see if player is next to the goal
          if (checkPlayerNextToGoal(moveReq, positionsAdjacentToGoal)) {
            //tell goal to follow player
            let updateFollowingStatus = level;
            updateFollowingStatus.goal.following[level.level - 1] = 1;
            setLevel(updateFollowingStatus);
          }
        }

        //if goal is following
        if (level.goal.following[level.level - 1]) {
          //follow player works by updating and not rerendering, will rerender on
          //next move... for some reason this is the smoothest way to do it
          let updateGoalPosition = level;

          if (level.level === 1) {
            updateGoalPosition.goal.x = follower1Moves[directionMoved].x;
            updateGoalPosition.goal.y = follower1Moves[directionMoved].y;
          }
          if (level.level === 2) {
            updateGoalPosition.goal.x = follower2Moves[directionMoved].x;
            updateGoalPosition.goal.y = follower2Moves[directionMoved].y;
          }
          if (level.level === 3) {
            updateGoalPosition.goal.x = follower3Moves[directionMoved].x;
            updateGoalPosition.goal.y = follower3Moves[directionMoved].y;
          }
        }

        //create new level config updating player position
        let config = level;

        config.player.x = moveReq.x;
        config.player.y = moveReq.y;

        if (levelIndex === 4) {
          config.tails.x = 3;
          config.tails.y = 3;
          config.knuckles.x = 4;
          config.knuckles.y = 2;
          config.shadow.x = 5;
          config.shadow.y = 10;
        }
        endStagePosCheck(moves);

        //use trigger to cause double rerender? i think?
        setTrigger((trigger) => {
          setLevel(config);
          return trigger === 0 ? 1 : 0;
        });
      }
    }
  };

  const endStagePosCheck = (moves) => {
    let config = level;

    //check if level 5 which is index 4 in levels
    if (levelIndex === 4) {
      for (const [key, value] of Object.entries(moves)) {
        if (value.x === level.tails.x && value.y === level.tails.y) {
          config.nearTails = true;
          setLevel(config);
        } else {
          config.nearTails = false;
          setLevel(config);
        }

        if (value.x === level.shadow.x && value.y === level.shadow.y) {
          config.nearShadow = true;
          setLevel(config);
        } else {
          config.nearShadow = false;
          setLevel(config);
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    //creating a custom event to pass into handleMove()
    let customEvent = { target: { className: "" } };

    if (event.key.toLowerCase() === "w") {
      customEvent.target.className = level.player.x - 1 + ":" + level.player.y;
      handleMove(customEvent);
    }
    if (event.key.toLowerCase() === "s") {
      customEvent.target.className = level.player.x + 1 + ":" + level.player.y;
      handleMove(customEvent);
    }
    if (event.key.toLowerCase() === "a") {
      customEvent.target.className =
        level.player.x + ":" + Number(level.player.y - 1);
      handleMove(customEvent);
    }
    if (event.key.toLowerCase() === "d") {
      customEvent.target.className =
        level.player.x + ":" + Number(level.player.y + 1);
      handleMove(customEvent);
    }
  };

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
                    //check to see which level we are on and which followers to setup
                    if (level.level === 1) {
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
                    } else if (level.level === 2) {
                      return (
                        <div
                          className={`tile empty-tile ${i}:${j}`}
                          key={`${i}:${j}`}
                          onClick={(event) => handleMove(event)}
                        >
                          {level.player.x === i && level.player.y === j ? (
                            <div className="player"></div>
                          ) : level.goal.x === i && level.goal.y === j ? (
                            <div className={`knuckles ${i}:${j}`}></div>
                          ) : i === level.tails.x && j === level.tails.y ? (
                            <div
                              ref={tailsRef}
                              className={`tails ${i}:${j}`}
                            ></div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    } else if (level.level === 3) {
                      return (
                        <div
                          className={`tile empty-tile ${i}:${j}`}
                          key={`${i}:${j}`}
                          onClick={(event) => handleMove(event)}
                        >
                          {level.player.x === i && level.player.y === j ? (
                            <div className="player"></div>
                          ) : level.goal.x === i && level.goal.y === j ? (
                            <div className={`shadow ${i}:${j}`}></div>
                          ) : i === level.tails.x && j === level.tails.y ? (
                            <div
                              ref={tailsRef}
                              className={`tails ${i}:${j}`}
                            ></div>
                          ) : i === level.knuckles.x &&
                            j === level.knuckles.y ? (
                            <div
                              ref={knucklesRef}
                              className={`knuckles ${i}:${j}`}
                            ></div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    } else if (level.level === 4) {
                      return (
                        <div
                          className={`tile empty-tile ${i}:${j}`}
                          key={`${i}:${j}`}
                          onClick={(event) => handleMove(event)}
                        >
                          {level.player.x === i && level.player.y === j ? (
                            <div className="player" ref={sonicRef}></div>
                          ) : level.goal.x === i && level.goal.y === j ? (
                            <div
                              ref={eggmanRef}
                              className={`eggman ${i}:${j}`}
                            ></div>
                          ) : i === level.tails.x && j === level.tails.y ? (
                            <div
                              ref={tailsRef}
                              className={`tails ${i}:${j}`}
                            ></div>
                          ) : i === level.knuckles.x &&
                            j === level.knuckles.y ? (
                            <div
                              ref={knucklesRef}
                              className={`knuckles ${i}:${j}`}
                            ></div>
                          ) : i === level.shadow.x && j === level.shadow.y ? (
                            <div
                              ref={shadowRef}
                              className={`shadow ${i}:${j}`}
                            ></div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    } else if (level.level === 5) {
                      return (
                        <div
                          className={`tile empty-tile ${i}:${j}`}
                          key={`${i}:${j}`}
                          onClick={(event) => handleMove(event)}
                        >
                          {level.player.x === i && level.player.y === j ? (
                            <div className="player" ref={sonicRef}></div>
                          ) : i === level.tails.x && j === level.tails.y ? (
                            <div ref={tailsRef} className={`tails`}></div>
                          ) : i === level.knuckles.x &&
                            j === level.knuckles.y ? (
                            <div ref={knucklesRef} className={`knuckles`}></div>
                          ) : i === level.shadow.x && j === level.shadow.y ? (
                            <div ref={shadowRef} className={`shadow`}></div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    }
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
