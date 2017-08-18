/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from "react";

export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps, undefined>  {
    render() {
     return  <div className="header">
              Header
            </div>
    }
}