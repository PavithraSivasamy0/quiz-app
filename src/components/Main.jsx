import { useContext } from "react";
import { pageContext } from "../context/pageContext";

export const Main = () => {
  const { setPage } = useContext(pageContext);
  return (
    <>
      <button className="start-btn" onClick={() => setPage("Quiz")}>
        Start the Quiz
      </button>
    </>
  );
};
