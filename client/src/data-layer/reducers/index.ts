import { combineReducers } from 'redux';

import pxBayReducer from './pxBayReducer';
import flickerReducer from './flickerReducer';

const imageReducers = combineReducers({
  pxBayReducer,
  flickerReducer

});

export default imageReducers;