import { call, put } from 'redux-saga/effects';
import { storeFlickerEntity, httpCallStarted, httpCallCompleted } from '../actions';
import { FlickerEntity } from '../../business-layer/models';
import { imageAPIs } from '../api';
export function* fetchFlickerEntities(action) {
  let flickerEntities : FlickerEntity[];
  try {
    yield put(httpCallStarted());
    flickerEntities = yield call(imageAPIs.fetchFlickerEntitiesAsync, action.payload);
    yield put(storeFlickerEntity(flickerEntities));
    yield put(httpCallCompleted())
  }
  catch(error) {
      yield put({ type: 'FLICKER_REQUEST_FAILED', error })
  }
}