import * as React from "react";
import Header from '../component/Header';

require("!style-loader!css-loader!stylus-loader!./AppStage.styl");

const reactLogo = require("./react.svg");

export interface AppProps {
}

export default class AppStage extends React.Component<AppProps, undefined> {
    render() {
        return <div className="app">
                    <header></header>
                    <h1>Hello World!</h1>
                    <p>Foo to the barz</p>
                    <img src={reactLogo}/>
                </div>;
            }
}