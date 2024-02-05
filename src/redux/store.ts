import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import songSaga from "./songs/songSaga";
import songReducer from "./songs/songSlice";

const saga: any = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(songSaga);

export const songSelector = (state: RootState) => state.songs;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
