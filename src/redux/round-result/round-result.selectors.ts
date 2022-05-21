import { createSelector } from "reselect";

const selectCurrentRoundResult = (state:any) => state.roundResult;

export const selectRoundResult = createSelector(
  [selectCurrentRoundResult],
  (state) => state.roundResult
);
