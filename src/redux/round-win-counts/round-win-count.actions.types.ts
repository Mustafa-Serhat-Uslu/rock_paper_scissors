import RoundWinCountsTypes from "./round-win-counts.types";

export const increaseRoundCount = () => ({
  type: RoundWinCountsTypes.INCREASE_ROUND_COUNT
});

export const increaseWinCount = () => ({
  type: RoundWinCountsTypes.INCREASE_WIN_COUNT
});

export const resetHeaderCounter = () => ({
  type: RoundWinCountsTypes.RESET_HEADER_COUNTERS
});
