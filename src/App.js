import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { pageContext } from "./context/pageContext";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";
import { Traffic } from "./components/TrafficLight/Traffic";
import { ToDoWrapper } from "./components/TodoList/ToDoWrapper";
import { DropDownList } from "./components/Dropdown/DropDownList";

function App() {
  const [page, setPage] = useState("Dropdown");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <pageContext.Provider value={{ page, setPage, score, setScore }}>
        {page === "Traffic" && <Traffic />}
        {/* quiz app */}
        {page === "Main" && <Main />}
        {page === "Quiz" && <Quiz />}
        {page === "Score" && <Score />}

        {/* todo list */}
        {page === "Todo" && <ToDoWrapper />}

        {/* dropdown */}
        {page === "Dropdown" && <DropDownList />}
      </pageContext.Provider>
    </div>
  );
}

export default App;
