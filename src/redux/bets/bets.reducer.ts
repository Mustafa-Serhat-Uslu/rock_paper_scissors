import BetTypes from "./bets.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE = {
  bets: {...GameConstants.startingBets}
};

const betsReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case BetTypes.ADJUST_BETS:
      return {
        ...state,
        bets: {...action.payload}
      };
    case BetTypes.RESET_BETS:
      return {
        ...state,
        bets: {...GameConstants.startingBets}
      };
    default:
      return state;
  }
};

export default betsReducer;
