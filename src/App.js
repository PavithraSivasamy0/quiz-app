import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { pageContext } from "./context/pageContext";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";

function App() {
  const [page, setPage] = useState("Main");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <pageContext.Provider value={{ page, setPage, score, setScore }}>
        <h1>Welcome to the Quiz</h1>
        {page === "Main" && <Main />}
        {page === "Quiz" && <Quiz />}
        {page === "Score" && <Score />}
      </pageContext.Provider>
    </div>
  );
}

export default App;
