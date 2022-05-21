import BalanceActionTypes from "./balance.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE = {
  balance: GameConstants.beginningBalance
};

const balanceReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case BalanceActionTypes.DECREASE_BALANCE:
      return {
        ...state,
        balance: state.balance - action.payload
      };
    case BalanceActionTypes.INCREASE_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload
      };
    case BalanceActionTypes.RESET_BALANCE:
      return {
        ...state,
        balance: GameConstants.beginningBalance
      };

    default:
      return state;
  }
};

export default balanceReducer;
