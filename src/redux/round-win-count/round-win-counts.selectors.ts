import { createSelector } from "reselect";

const selectCurrentBetCount = (state:any) => state.bet;
const selectCurrentWinCount = (state:any) => state.win;

export const selectBetCount = createSelector(
  [selectCurrentBetCount],
  (state) => state.bet
);

export const selectWinCount = createSelector(
  [selectCurrentWinCount],
  (state) => state.win
);
