import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware, Middleware } from "redux";

import rootReducer from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);
