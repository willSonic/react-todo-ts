import { takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import * as constants from '../../business-layer/constants/action-types';
import { fetchPxBayEntities } from './pxBaySaga';

function* watchPxBayImageFetchRequest() {
  while(true) {
    //noinspection TypeScriptValidateTypes
    yield takeLatest(constants.FETCH_PX_BAY_IMAGES, fetchPxBayEntities)
  }
}


// Register all your watchers
export default function* root() {
  yield [
    fork(watchPxBayImageFetchRequest),
  ]
}