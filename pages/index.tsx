import React from "react";
import useLocalStorage from "../useLocalStorage";
import { number } from "prop-types";
type Score = {
  henriScore: number;
  merisScore: number;
};
const initalValue: Score = {
  henriScore: 0,
  merisScore: 0
};
const Index = () => {
  const [score, setScore] = useLocalStorage("myScoreKey", initalValue);
  return (
    <div style={{ fontSize: 40 }}>
      <div>
        🍆 {score.merisScore} - {score.henriScore} 💅🏻
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() =>
            setScore({
              merisScore: score.merisScore + 1,
              henriScore: score.henriScore
            })
          }
        >
          +🍆
        </button>
        <button
          onClick={() =>
            setScore({
              merisScore: score.merisScore,
              henriScore: score.henriScore + 1
            })
          }
        >
          +💅
        </button>
      </div>
    </div>
  );
};
export default Index;
