import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questionsSlice";
import usersReducer from "../features/usersSlice";
import authedUserReducer from "../features/authedUserSlice";
import { loadingBarReducer } from "react-redux-loading-bar";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   users: usersReducer,
//   authedUser: authedUserReducer,
//   questions: questionsReducer,
//   loadingBar: loadingBarReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
  },
});
