import { useEffect, useState } from "react";
import { BoardPage } from "./BoardPage";

export const Traffic = () => {
  const config = {
    red: {
      duration: 4000,
      next: "yellow",
    },
    yellow: {
      duration: 500,
      next: "green",
    },
    green: {
      duration: 3000,
      next: "red",
    },
  };

  const [activeColor, setActiveColor] = useState("red");
  useEffect(() => {
    const { duration, next } = config[activeColor];
    const timer = setTimeout(() => {
      setActiveColor(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [activeColor]);

  return (
    <>
      <BoardPage displayType={"traffic-board-h"} activeColor={activeColor} />
      <BoardPage displayType={"traffic-board-v"} activeColor={activeColor} />
    </>
  );
};
