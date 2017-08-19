/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./css/main.styl");

import 'react-hot-loader/patch'
import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import AppStage from './view-layer/app-stage/AppStage'

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <AppStage/>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: {hot: any};

if (module.hot) {
    module.hot.accept("./view-layer/app-stage/AppStage", () => {
        const NewApp = require("./view-layer/app-stage/AppStage").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });

}