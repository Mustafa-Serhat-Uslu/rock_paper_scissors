import BETS_ACTION_TYPES from "./bets.types";

import {
  Action,
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../reducer.utils";

import { BetsType } from "../../game-logic/game-logic.constants";

export type AdjustBets = ActionWithPayload<
  BETS_ACTION_TYPES.ADJUST_BETS,
  BetsType
>;

export type ResetBets = Action<BETS_ACTION_TYPES.RESET_BETS>;

export const adjustBets = withMatcher(
  (item: BetsType): AdjustBets =>
    createAction(BETS_ACTION_TYPES.ADJUST_BETS, item)
);

export const resetBets = withMatcher(
  (): ResetBets => createAction(BETS_ACTION_TYPES.RESET_BETS)
);
