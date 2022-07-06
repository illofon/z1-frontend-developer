import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { Verification } from "../../models/Verification";
import {
  fetchVerificationSuccess,
  fetchVerificationFailure,
} from "../../actions/Verification/Verification";
import { verificationTypes } from "../../Actiontypes/verificationTypes";
import { ENDPOINT } from "../../constants";

const postVerification = () =>
  axios.post<Verification[]>(ENDPOINT);

function* fetchVerificationSaga(): Generator{
  try {
    const response:any = yield call(postVerification)
    yield put(
      fetchVerificationSuccess({
        outcome: response.data.summary.outcome
      })
    );
  } catch (e:any) {
    yield put(
      fetchVerificationFailure({
        error: e.message
      })
    );
  }
}

function* verificationSaga() {
  yield all([takeEvery(verificationTypes.FETCH_VERIFICATION_REQUEST, fetchVerificationSaga)]);
}

export default verificationSaga;
