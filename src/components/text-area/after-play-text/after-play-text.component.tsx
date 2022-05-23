import React, { useEffect } from "react";
import "./after-play-text.styles.scss";
import { AnyAction, Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { selectBets } from "../../../redux/bets/bets.selectors";
import { BetsType } from "../../../game-logic/game-logic.constants";
import { increaseBalance } from "../../../redux/balance/balance.actions";
import * as GameConstants from "../../../game-logic/game-logic.constants";
import { RoundResultState } from "../../../redux/round-result/round-result.reducer";
import { selectRoundResult } from "../../../redux/round-result/round-result.selectors";
import { increaseWinCount } from "../../../redux/round-win-counts/round-win-count.actions.types";

const AfterPlayText: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const bets: BetsType = useSelector(selectBets);
  const roundResult: RoundResultState = useSelector(selectRoundResult);

  const playerWon: boolean = roundResult.roundCoefficient > 0;

  const totalBet: any = Object.values(bets).reduce(
    (total: any, curr: any) => total + curr
  );

  // InPlayText component triggers header update dispatches on mount
  useEffect(() => {
    if (playerWon) {
      dispatch(increaseWinCount());
      dispatch(
        increaseBalance(
          bets[roundResult.winningCard] * roundResult.roundCoefficient
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let winnerClassNames: string = "";

  switch (roundResult.winningCard) {
    case GameConstants.CardTypes.Rock:
      winnerClassNames += " winner-blue";
      break;
    case GameConstants.CardTypes.Paper:
      winnerClassNames += " winner-green";
      break;
    case GameConstants.CardTypes.Scissors:
      winnerClassNames += " winner-red";
      break;
    default:
      break;
  }

  return (
    <div className={"after-play-container"}>
      <h1 className={winnerClassNames}>
        {roundResult.winningCard} {roundResult.winningCard !== "draw" && "won"}
      </h1>
      <div className={"win-amount-display"}>
        <h2 className={"win-h2"}>{playerWon ? "you win" : "you lost"}</h2>
        <h2 className={"amount-h2"}>
          {playerWon
            ? bets[roundResult.winningCard] * roundResult.roundCoefficient
            : totalBet}
        </h2>
      </div>
    </div>
  );
};

export default AfterPlayText;
