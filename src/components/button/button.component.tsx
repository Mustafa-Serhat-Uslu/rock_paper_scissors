import React, { useCallback } from "react";
import "./button.styles.scss";
import { AnyAction, Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { resetBets } from "../../redux/bets/bets.actions";
import { selectBets } from "../../redux/bets/bets.selectors";
import { BetsType } from "../../game-logic/game-logic.constants";
import { changePlayState } from "../../redux/play-state/play-state.actions";
import { selectPlayState } from "../../redux/play-state/play-state.selectors";
import { setRoundResult } from "../../redux/round-result/round-result.actions";
import { increaseRoundCount } from "../../redux/round-win-counts/round-win-count.actions.types";

import * as GameUtils from "../../game-logic/game-logic.utils";
import * as GameConstants from "../../game-logic/game-logic.constants";

const Button: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const bets: BetsType = useSelector(selectBets);
  const playState: GameConstants.PlayStates = useSelector(selectPlayState);

  // Get user selections, get round result then set RoundResult State
  const resolveRound = useCallback((): void => {
    let userSelectons: string[] = Object.keys(bets).filter(
      (key) => bets[key] > 0
    );
    dispatch(setRoundResult(GameUtils.getRoundResult(userSelectons)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bets]);

  // Decides what playState to move to on button click
  const handleClick = useCallback<() => void>((): void => {
    switch (playState) {
      case GameConstants.PlayStates.BeforePlay:
        resolveRound();
        dispatch(changePlayState(GameConstants.PlayStates.InPlay));
        setTimeout(() => {
          dispatch(increaseRoundCount());
          dispatch(changePlayState(GameConstants.PlayStates.AfterPlay));
        }, GameConstants.stateChangeTime);
        return;
      case GameConstants.PlayStates.AfterPlay:
        dispatch(resetBets());
        dispatch(changePlayState(GameConstants.PlayStates.BeforePlay));
        return;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playState, bets]);

  const betPlaced: boolean = Object.values(bets)
    .map((x) => x > 0)
    .includes(true);

  let buttonLabel = "PLAY";
  let buttonClasses = "button";

  // switch statement decides on dynamic button properties
  switch (playState) {
    case GameConstants.PlayStates.InPlay:
      buttonClasses += " inPlay";
      break;
    case GameConstants.PlayStates.AfterPlay:
      buttonLabel = "CLEAR";
      buttonClasses += " button-effects";
      break;
    default:
      if (betPlaced) {
        buttonClasses += " button-effects";
      }
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

export default Button;
