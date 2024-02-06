import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import baseURL from "../baseURL";
import { getAlbumSuccess } from "./albumSlice";

function* fetchAlbums(): Generator<any, void, any> {
  try {
    const album = yield call(() => axios.get(`${baseURL}/albums`));
    console.log("albummmm", album);
    const formattedAlbum = yield album.data;
    yield put(getAlbumSuccess(formattedAlbum));
  } catch (error) {
    console.log(error);
  }
}
function* albumSaga() {
  yield takeEvery("albums/getAlbumPending", fetchAlbums);
}

export default albumSaga;
