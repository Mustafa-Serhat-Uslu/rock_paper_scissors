import { createSelector } from "reselect";

const selectCurrentRoundResult = (state:any) => state.x;

export const selectRoundResult = createSelector(
  [selectCurrentRoundResult],
  (state) => state.roundResult
);
