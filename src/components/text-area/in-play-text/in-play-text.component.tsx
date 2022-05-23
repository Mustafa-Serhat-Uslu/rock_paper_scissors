import React, { useState } from "react";
import "./in-play-text.styles.scss";
import { useSelector } from "react-redux";
import SelectionLabel from "./selection-label.component";
import { selectBets } from "../../../redux/bets/bets.selectors";
import { BetsType } from "../../../game-logic/game-logic.constants";
import { RoundResultState } from "../../../redux/round-result/round-result.reducer";
import { selectRoundResult } from "../../../redux/round-result/round-result.selectors";

import * as GameConstants from "../../../game-logic/game-logic.constants";

const InPlayText: React.FC = () => {
  const bets: BetsType = useSelector(selectBets);
  const roundResult: RoundResultState = useSelector(selectRoundResult);

  let userSelections: string[] = Object.keys(bets).filter(
    (key) => bets[key] > 0
  );

  const [index, setIndex] = useState(0);

  if (userSelections.length > 1) {
    userSelections.splice(1, 0, "&");
    index < 3 &&
      setTimeout(() => setIndex(index + 1), GameConstants.stateChangeTime / 3);
  }

  return (
    <div className={"in-play-container"}>
      <h1 className={"computer-selection-h1"}>
        {roundResult.computerSelection}
      </h1>
      <h1 className={"vs-h1"}>vs</h1>
      <SelectionLabel label={userSelections[index]} />
    </div>
  );
};

export default InPlayText;
