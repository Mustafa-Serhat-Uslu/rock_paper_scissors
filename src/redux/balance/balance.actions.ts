import BALANCE_ACTION_TYPES from "./balance.types";

import {
  Action,
  withMatcher,
  createAction,
  ActionWithPayload,
} from "../reducer.utils";

export type ResetBalance = Action<BALANCE_ACTION_TYPES.RESET_BALANCE>;
export type DecreaseBalance = ActionWithPayload<
  BALANCE_ACTION_TYPES.DECREASE_BALANCE,
  number
>;
export type IncreaseBalance = ActionWithPayload<
  BALANCE_ACTION_TYPES.INCREASE_BALANCE,
  number
>;

export const resetBalance = withMatcher(
  (): ResetBalance => createAction(BALANCE_ACTION_TYPES.RESET_BALANCE)
);

export const decreaseBalance = withMatcher(
  (item: number): DecreaseBalance =>
    createAction(BALANCE_ACTION_TYPES.DECREASE_BALANCE, item)
);

export const increaseBalance = withMatcher(
  (item: number): IncreaseBalance =>
    createAction(BALANCE_ACTION_TYPES.INCREASE_BALANCE, item)
);
