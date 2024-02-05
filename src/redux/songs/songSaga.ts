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
    // Handle error here
  }
}

function* createSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;
    const response = yield call(() => axios.post(`${baseURL}/create`, data));
    const createdSong = yield response.data.song;
    yield put(postSongSuccess(createdSong));
  } catch (error) {
    console.log(error);
    // Handle error here
  }
}

function* updateSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;
    const response = yield call(() =>
      axios.patch(`${baseURL}/update/${data._id}`, data)
    );
    const updateSong = yield response.data.song;
    yield put(updateSongSuccess(updateSong));
  } catch (error) {
    console.log(error);
    // Handle error here
  }
}

function* deleteSong(action: any): Generator<any, void, any> {
  try {
    const data = action.payload;
    console.log(data);
    const response = yield call(() =>
      axios.delete(baseURL + "/delete/" + data)
    );
    const updateSong = yield response.data;
    console.log(updateSong, "response");
    yield put(deleteSongSuccess(data));
  } catch (error) {
    console.log(error);
    // Handle error here
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongPending", fetchSongs);
  yield takeEvery("songs/postSongPending", createSong);
  yield takeEvery("songs/updateSongPending", updateSong);
  yield takeEvery("songs/deleteSongPending", deleteSong);
}

export default songSaga;
