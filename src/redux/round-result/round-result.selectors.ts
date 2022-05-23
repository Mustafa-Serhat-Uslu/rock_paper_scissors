import { RootState } from "../store";
import { createSelector } from "reselect";
import { RoundResultState } from "./round-result.reducer";

const selectCurrentRoundResult = (state: RootState): RoundResultState =>
  state.roundResult;

export const selectRoundResult = createSelector(
  [selectCurrentRoundResult],
  (state) => state
);
