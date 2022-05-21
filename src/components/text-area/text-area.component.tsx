import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./text-area.styles.scss";

import { selectBets } from "../../redux/bets/bets.selectors";
import { selectPlayState } from "../../redux/play-state/play-state.selectors";
import { increaseBalance } from "../../redux/balance/balance.actions";

import * as GameConstants from "../../game-logic/game-logic.constants";

interface Props {
  bets?: any;
  playState?: any;
  roundResult?: GameConstants.RoundResult;
  increaseBalance: any;
}

const TextArea: React.FC<Props> = ({ bets, roundResult, playState, increaseBalance }) => {
  const beforePlayDisplay: JSX.Element = (
    <h3 className={"before-play-h3"}>pick your positions</h3>
  );

  useEffect( ()=> {
    if (roundResult && roundResult.roundCoefficient > 0){
      setTimeout(() => {
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
          {roundResult && roundResult.roundCoefficient > 0
            ? "you win"
            : "you loose"}
        </h2>
        <h2 className={"amount-h2"}>{ roundResult && roundResult.roundCoefficient > 0 ?  bets[roundResult.winningCard] * roundResult.roundCoefficient : totalBet }</h2>
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
});

const mapDispatchToProps = (dispatch:any) => ({
  increaseBalance: (item:number) => dispatch(increaseBalance(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);