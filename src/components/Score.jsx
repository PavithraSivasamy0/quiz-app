import { useContext } from "react";
import { pageContext } from "../context/pageContext";

export const Score = () => {
  const { score } = useContext(pageContext);
  return (
    <>
      <h1>
        Well Done! you score is <strong> {score} out of 3</strong>
      </h1>
    </>
  );
};
