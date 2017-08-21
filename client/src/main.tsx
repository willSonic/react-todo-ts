/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./css/main.styl");
import 'react-hot-loader/patch'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import AppStage from './view-layer/app-stage/AppStage';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagaWatchers from './data-layer/sagas/watchersSaga';
import pxBayReducers from './data-layer/reducers';
import {PixaBayEntity } from './business-layer/models';


//const rootEl = document.getElementById("root");

// render(
//     <AppContainer>
//         <AppStage/>
//     </AppContainer>,
//     rootEl
// );
//
// // Hot Module Replacement API
// declare let module: {hot: any};
//
// if (module.hot) {
//     module.hot.accept("./view-layer/app-stage/AppStage", () => {
//         const NewApp = require("./view-layer/app-stage/AppStage").default;
//
//         render(
//             <AppContainer>
//                 <NewApp/>
//             </AppContainer>,
//             rootEl
//         );
//     });
//
// }

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


let store = createStore(
  pxBayReducers
  ,applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatchers);

ReactDOM.render(
  <Provider store={store}>
    <AppStage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
