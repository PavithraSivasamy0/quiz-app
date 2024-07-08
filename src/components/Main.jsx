import { useContext } from "react";
import { pageContext } from "../context/pageContext";

export const Main = () => {
  const { setPage } = useContext(pageContext);
  return (
    <>
      <h1>Welcome to the Quiz</h1>
      <button className="start-btn" onClick={() => setPage("Quiz")}>
        Start the Quiz
      </button>
    </>
  );
};
