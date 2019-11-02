import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
