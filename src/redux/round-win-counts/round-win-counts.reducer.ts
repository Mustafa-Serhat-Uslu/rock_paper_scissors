import { AnyAction } from "redux";

import {
  increaseRoundCount,
  increaseWinCount,
  resetHeaderCounters,
} from "./round-win-count.actions.types";

export const startingHeaderCounters: { [key: string]: number } = {
  bet: 0,
  win: 0,
};

const INITIAL_STATE = {
  ...startingHeaderCounters,
};

const roundWinCountsReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): { [key: string]: number } => {
  if (increaseRoundCount.match(action)) {
    return {
      ...state,
      bet: state.bet + 1,
    };
  }
  if (increaseWinCount.match(action)) {
    return {
      ...state,
      win: state.win + 1,
    };
  }
  if (resetHeaderCounters.match(action)) {
    return {
      ...startingHeaderCounters,
    };
  }

  return state;
};

export default roundWinCountsReducer;
