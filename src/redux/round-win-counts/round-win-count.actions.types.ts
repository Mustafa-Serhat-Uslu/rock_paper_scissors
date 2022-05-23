import ROUND_WIN_COUNTERS_TYPES from "./round-win-counts.types";

import { Action, withMatcher, createAction } from "../reducer.utils";

export type IncreaseRoundCount =
  Action<ROUND_WIN_COUNTERS_TYPES.INCREASE_ROUND_COUNT>;

export type IncreaseWinCount =
  Action<ROUND_WIN_COUNTERS_TYPES.INCREASE_WIN_COUNT>;

export type ResetHeaderCounters =
  Action<ROUND_WIN_COUNTERS_TYPES.RESET_HEADER_COUNTERS>;

export const increaseRoundCount = withMatcher(
  (): IncreaseRoundCount =>
    createAction(ROUND_WIN_COUNTERS_TYPES.INCREASE_ROUND_COUNT)
);
export const increaseWinCount = withMatcher(
  (): IncreaseWinCount =>
    createAction(ROUND_WIN_COUNTERS_TYPES.INCREASE_WIN_COUNT)
);
export const resetHeaderCounters = withMatcher(
  (): ResetHeaderCounters =>
    createAction(ROUND_WIN_COUNTERS_TYPES.RESET_HEADER_COUNTERS)
);
