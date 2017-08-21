import { call, put } from 'redux-saga/effects';
import { storePxBayEntity, httpCallStarted, httpCallCompleted } from '../actions';
import { PixaBayEntity } from '../../business-layer/models';
import { imageAPIs } from '../api';
export function* fetchPxBayEntities(action) {
  let pxaBayEntities : PixaBayEntity[];
  try {
    yield put(httpCallStarted());
    pxaBayEntities = yield call(imageAPIs.fetchPxBayEntityAsync, action.payload)
    yield put(storePxBayEntity(pxaBayEntities));
    yield put(httpCallCompleted())
  }
  catch(error) {
      yield put({ type: 'PX_BAY_REQUEST_FAILED', error })
  }
}