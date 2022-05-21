import RoundResultTypes from "./round-result.types";

export const setRoundResult = (item:any) => ({
  type: RoundResultTypes.SET_ROUND_RESULT,
  payload: item
});
