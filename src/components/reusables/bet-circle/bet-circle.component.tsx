import React from "react";
import "./bet-circle.styles.scss";

type Props = {
  amount: number;
};

export const BetCircle: React.FC<Props> = ({ amount }) => {
  return (
    <div className={"bet-circle-container"}>
      <h1 className={"bet-circle-h1"}>{amount}</h1>
    </div>
  );
};
