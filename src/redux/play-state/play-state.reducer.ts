import { AnyAction } from "redux";
import { changePlayState } from "./play-state.actions";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE: GameConstants.PlayStates =
  GameConstants.PlayStates.BeforePlay;

const playStateReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): GameConstants.PlayStates => {
  if (changePlayState.match(action)) {
    return action.payload;
  }

  return state;
};

export default playStateReducer;
