import { takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import * as constants from '../../business-layer/constants/action-types';
import { fetchPxBayEntities } from './pxBaySaga';
import {fetchFlickerEntities} from "./flickerSaga";

function* watchPxBayImageFetchRequest() {
  while(true) {
    //noinspection TypeScriptValidateTypes
    yield takeLatest(constants.FETCH_PX_BAY_IMAGES, fetchPxBayEntities)
  }
}

function* watchFlickerImageFetchRequest() {
  while(true) {
    //noinspection TypeScriptValidateTypes
    yield takeLatest(constants.FETCH_FLICKER_IMAGES, fetchFlickerEntities)
  }
}


// Register all your watchers
export default function* root() {
  yield [
    fork(watchPxBayImageFetchRequest),
    fork(watchFlickerImageFetchRequest),
  ]
}