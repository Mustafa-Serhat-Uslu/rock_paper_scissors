import ROUND_RESULT_ACTION_TYPES from "./round-result.types";

import { RoundResult } from "../../game-logic/game-logic.constants";

import { createAction, withMatcher, ActionWithPayload } from "../reducer.utils";

export type SetRoundResult = ActionWithPayload<
  ROUND_RESULT_ACTION_TYPES.SET_ROUND_RESULT,
  RoundResult
>;

export const setRoundResult = withMatcher(
  (item: RoundResult): SetRoundResult =>
    createAction(ROUND_RESULT_ACTION_TYPES.SET_ROUND_RESULT, item)
);
