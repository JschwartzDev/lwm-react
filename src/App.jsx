import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Games from "./components/Games/Games";
import Settings from "./components/Settings/Settings";

function App() {
  const pages = ["games", "settings"];
  const [currentPage, setCurrentPage] = useState("games");
  const [currentGame, setCurrentGame] = useState("");

  const handleNav = (page) => {
    setCurrentPage(page);
    if (page === "games") {
      setCurrentGame("");
    }
  };

  const handleGame = (game) => {
    setCurrentGame(game);
  };

  return (
    <>
      <Nav currentPage={currentPage} pages={pages} handleNav={handleNav} />
      {currentPage === "games" && (
        <Games currentGame={currentGame} handleGame={handleGame} />
      )}
      {currentPage === "settings" && <Settings />}
    </>
  );
}

export default App;
