import { createSelector } from "reselect";
import { RootState } from "../store";

const selectCurrentBalance = (state: RootState): number => state.balance;

export const selectBalance = createSelector(
  [selectCurrentBalance],
  (state) => state
);
