import { AnyAction } from "redux";

import { setRoundResult } from "./round-result.actions";

// Used in the object type returned from getRoundResult
export type RoundResultState = {
  readonly roundCoefficient: number;
  readonly computerSelection: string;
  readonly winningCard: string;
};

const INITIAL_STATE: RoundResultState = {
  roundCoefficient: 0,
  computerSelection: "",
  winningCard: "",
};

const roundResultReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): RoundResultState => {
  if (setRoundResult.match(action)) {
    return { ...state, ...action.payload };
  }

  return state;
};

export default roundResultReducer;
