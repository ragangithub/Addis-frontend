import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import baseURL from "../baseURL";
import {
  deleteSongSuccess,
  getSongSuccess,
  postSongSuccess,
  updateSongSuccess,
} from "./songSlice";

function* fetchSongs(): Generator<any, void, any> {
  try {
    const songs = yield call(() => axios.get(`${baseURL}`));

    const formattedSong = yield songs.data;
    yield put(getSongSuccess(formattedSong));
  } catch (error) {
    console.log(error);
  }
}

function* createSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;
    const response = yield call(() => axios.post(`${baseURL}`, data));

    const createdSong = yield response.data;
    yield put(postSongSuccess(createdSong));
  } catch (error) {
    console.log(error);
  }
}

function* updateSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;

    const response = yield call(() =>
      axios.patch(`${baseURL}/${data.id}`, data)
    );

    const updateSong = yield response.data;

    yield put(updateSongSuccess(updateSong));
  } catch (error) {
    console.log(error);
  }
}

function* deleteSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;

    const response = yield call(() => axios.delete(`${baseURL}/${data}`));
    const updateSong = yield response.data;
    console.log(updateSong, "response");
    yield put(deleteSongSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongPending", fetchSongs);
  yield takeEvery("songs/postSongPending", createSong);
  yield takeEvery("songs/updateSongPending", updateSong);
  yield takeEvery("songs/deleteSongPending", deleteSong);
}

export default songSaga;
