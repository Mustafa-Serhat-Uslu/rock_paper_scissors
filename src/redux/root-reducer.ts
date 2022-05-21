import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import betsReducer from "./bets/bets.reducer";
import balanceReducer from "./balance/balance.reducer";
import playStateReducer from "./play-state/play-state.reducer";
import roundResultReducer from "./round-result/round-result.reducer";
import roundWinCountsReducer from "./round-win-count/round-win-counts.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  bets: betsReducer,
  balance: balanceReducer,
  playState: playStateReducer,
  roundResult: roundResultReducer,
  roundWinCounts: roundWinCountsReducer
});

export default persistReducer(persistConfig, rootReducer);
