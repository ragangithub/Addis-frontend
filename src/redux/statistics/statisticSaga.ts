import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import baseURL from "../baseURL";
import { getStatisticsSuccess } from "./statisticSlice";

function* fetchStatistics(): Generator<any, void, any> {
  try {
    const statistics = yield call(() => axios.get(`${baseURL}/statistics`));
    const formattedStatistics = yield statistics.data;
    yield put(getStatisticsSuccess(formattedStatistics));
  } catch (error) {
    console.log(error);
  }
}
function* statisticsSaga() {
  yield takeEvery("statistics/getStatisticsPending", fetchStatistics);
}

export default statisticsSaga;
