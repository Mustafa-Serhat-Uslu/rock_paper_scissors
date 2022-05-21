import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./text-area.styles.scss";

import { selectBets } from "../../redux/bets/bets.selectors";
import { increaseBalance } from "../../redux/balance/balance.actions";
import { selectPlayState } from "../../redux/play-state/play-state.selectors";
import { selectRoundResult } from "../../redux/round-result/round-result.selectors";
import { increaseWinCount } from "../../redux/round-win-counts/round-win-count.actions.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

interface Props {
  bets?: any;
  playState?: any;
  increaseBalance: any;
  increaseWinCount: any;
  roundResult?: any;
}

const TextArea: React.FC<Props> = ({ bets, roundResult, playState, increaseBalance, increaseWinCount }) => {
  const beforePlayDisplay: JSX.Element = (
    <h3 className={"before-play-h3"}>pick your positions</h3>
  );

  const playerWon: boolean | undefined = roundResult && roundResult?.roundCoefficient > 0

  useEffect( ()=> {
    if (roundResult && playerWon){
      setTimeout(() => {
        increaseWinCount();
        increaseBalance(bets[roundResult.winningCard] * roundResult.roundCoefficient);
      }, GameConstants.stateChangeTime);
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[roundResult]);

  let userSelections = Object.keys(bets).filter((key) => bets[key] > 0);
  const inPlayDisplay: JSX.Element = (
    <div className={"in-play-container"}>
      <h1 className={"computer-selection-h1"}>
        {roundResult && roundResult.computerSelection}
      </h1>
      <h1 className={"vs-h1"}>vs</h1>
      <h1 className={"user-selection-h1"}>{userSelections}</h1>
    </div>
  );

  const totalBet:any = Object.values(bets).reduce((tot:any,cur:any) => tot + cur);
  
  const afterPlayDisplay: JSX.Element = (
    <div className={"after-play-container"}>
      <h1 className={"winner-h1"}>
        {roundResult?.winningCard}{" "}
        {roundResult?.winningCard !== "draw" && "won"}
      </h1>
      <div className={"win-amount-display"}>
        <h2 className={"win-h2"}>
          {playerWon
            ? "you win"
            : "you lost"}
        </h2>
        <h2 className={"amount-h2"}>{ roundResult && playerWon ?  bets[roundResult.winningCard] * roundResult.roundCoefficient : totalBet }</h2>
      </div> 
    </div>
  );

  let textDisplay: JSX.Element;

  switch (playState) {
    case GameConstants.PlayStates.InPlay:
      textDisplay = inPlayDisplay;
      break;
    case GameConstants.PlayStates.AfterPlay:
      textDisplay = afterPlayDisplay;
      break;
    default:
      textDisplay = beforePlayDisplay;
  }

  return <div className={"text-area-container"}>{textDisplay}</div>;
};

const mapStateToProps = createStructuredSelector({
  bets: selectBets,
  playState: selectPlayState,
  roundResult: selectRoundResult,
});

const mapDispatchToProps = (dispatch:any) => ({
  increaseWinCount: () => dispatch(increaseWinCount()),
  increaseBalance: (item:number) => dispatch(increaseBalance(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);