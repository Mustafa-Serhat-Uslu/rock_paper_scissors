import { createSelector } from "reselect";

const selectCurrentHeaderCounts = (state: any) => state.roundWinCounts;

export const selectBetCount = createSelector(
  [selectCurrentHeaderCounts],
  (state) => state.bet
);

export const selectWinCount = createSelector(
  [selectCurrentHeaderCounts],
  (state) => state.win
);
