import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./button.styles.scss";

import { resetBets } from "../../redux/bets/bets.actions";
import { selectBets } from "../../redux/bets/bets.selectors";
import { selectPlayState } from "../../redux/play-state/play-state.selectors";
import { changePlayState } from "../../redux/play-state/play-state.actions";

import * as GameConstants from "../../game-logic/game-logic.constants";
import * as GameUtils from "../../game-logic/game-logic.utils";

interface Props {
  bets: { [key: string]: number };
  playState: any;
  changePlayState?: any;
  setRoundResult: React.Dispatch<
    React.SetStateAction<GameConstants.RoundResult | undefined>
  >;
  resetBets: any
}

const Button: React.FC<Props> = ({
  bets,
  playState,
  changePlayState,
  resetBets,
  setRoundResult
}) => {

  const betPlaced=Object.values(bets)
    .map((x) => x > 0)
    .includes(true);

  const resolveRound = (): void => {
    let userCards = Object.keys(bets).filter((key) => bets[key] > 0);
    setRoundResult(GameUtils.getRoundResult(userCards));
  };

  // Decides what GameState to move to on button click
  const handleClick = (): void => {
    switch (playState) {
      case GameConstants.PlayStates.BeforePlay:
        resolveRound();
        changePlayState(GameConstants.PlayStates.InPlay);
        setTimeout(() => {
          changePlayState(GameConstants.PlayStates.AfterPlay);
        }, GameConstants.stateChangeTime);
        return;
      case GameConstants.PlayStates.AfterPlay:
        resetBets();
        changePlayState(GameConstants.PlayStates.BeforePlay);
        return;
      default:
        break;
    }
  };
  
  let buttonLabel = "PLAY";
  let buttonClasses = "button";

  switch (playState) {
    case GameConstants.PlayStates.InPlay:
      buttonClasses += " inPlay";
      break;
    case GameConstants.PlayStates.AfterPlay:
      buttonLabel = "CLEAR";
      break;
    default:
      break;
  }

  return (
    <button
      className={buttonClasses}
      onClick={() =>
        betPlaced &&
        playState !== GameConstants.PlayStates.InPlay &&
        handleClick()
      }
    >
      <h1 className={"button-h1"}>{buttonLabel}</h1>
    </button>
  );
};

const mapStateToProps = createStructuredSelector({
  bets: selectBets,
  playState: selectPlayState,
});

const mapDispatchToProps = (dispatch: any) => ({
  resetBets: () => dispatch(resetBets()),
  changePlayState: (it:GameConstants.PlayStates) => dispatch(changePlayState(it)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);