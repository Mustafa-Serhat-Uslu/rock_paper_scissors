import { AnyAction } from "redux";

import * as GameConstants from "../../game-logic/game-logic.constants";

import { resetBets, adjustBets } from "./bets.actions";

// Default bets state for each round start
export const startingBets: GameConstants.BetsType = {
  rock: 0,
  paper: 0,
  scissors: 0,
};

const INITIAL_STATE = {
  ...startingBets,
};

const betsReducer = (
  bets = INITIAL_STATE,
  action = {} as AnyAction
): GameConstants.BetsType => {
  if (adjustBets.match(action)) {
    return { ...action.payload };
  }
  if (resetBets.match(action)) {
    return { ...startingBets };
  }

  return bets;
};

export default betsReducer;
