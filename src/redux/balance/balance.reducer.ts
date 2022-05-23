import { AnyAction } from "redux";

import {
  resetBalance,
  decreaseBalance,
  increaseBalance,
} from "./balance.actions";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE: number = GameConstants.beginningBalance;

const balanceReducer = (
  balance = INITIAL_STATE,
  action = {} as AnyAction
): number => {
  if (decreaseBalance.match(action)) {
    return balance - action.payload;
  }
  if (increaseBalance.match(action)) {
    return balance + action.payload;
  }
  if (resetBalance.match(action)) {
    return GameConstants.beginningBalance;
  }

  return balance;
};

export default balanceReducer;
