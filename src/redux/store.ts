import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import songSaga from "./songs/songSaga";
import songReducer from "./songs/songSlice";
import albumReducer from "./albums/albumSlice";
import albumSaga from "./albums/albumSaga";
import statisticReducer from "./statistics/statisticSlice";
import statisticsSaga from "./statistics/statisticSaga";

const saga: any = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
    albums: albumReducer,
    statistics: statisticReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(songSaga);
saga.run(albumSaga);
saga.run(statisticsSaga);

export const songSelector = (state: RootState) => state.songs;
export const albumSelector = (state: RootState) => state.albums;
export const statisticsSelector = (state: RootState) => state.statistics;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
