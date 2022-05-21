import RoundWinCountsTypes from "./round-win-counts.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE = {
  bet: 0,
  win: 0
};

const roundWinCountsReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case RoundWinCountsTypes.INCREASE_ROUND_COUNT:
      return {
        ...state,
        bet: state.bet + 1
      };
    case RoundWinCountsTypes.INCREASE_WIN_COUNT:
      return {
        ...state,
        win: state.win + 1
      };
    case RoundWinCountsTypes.RESET_HEADER_COUNTERS:
      return {
        ...state,
        win: 0,
        bet: 0
      };

    default:
      return state;
  }
};

export default roundWinCountsReducer;
