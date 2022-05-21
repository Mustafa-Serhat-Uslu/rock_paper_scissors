import { createSelector } from "reselect";

const selectCurrentBets = (state:any) => state.bets;

export const selectBets = createSelector(
  [selectCurrentBets],
  (state) => state.bets
);
