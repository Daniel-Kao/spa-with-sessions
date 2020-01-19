import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import storage from "redux-persist/lib/storage";

const initialState = {};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

let store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

export { store, persistor };
