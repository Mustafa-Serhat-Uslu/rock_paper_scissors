import { createSelector } from "reselect";
import { RootState } from "../store";

const selectCurrentHeaderCounts = (
  state: RootState
): { [key: string]: number } => state.roundWinCounts;

export const selectBetCount = createSelector(
  [selectCurrentHeaderCounts],
  (state) => state.bet
);

export const selectWinCount = createSelector(
  [selectCurrentHeaderCounts],
  (state) => state.win
);
