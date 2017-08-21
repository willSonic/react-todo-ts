/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from "react";

export interface FooterProps {
}

export default class Footer extends React.Component<FooterProps, undefined>  {
    render() {
     return  <footer>
               <div className="container">
                  <h4 className="logo">Footer</h4>
               </div>
             </footer>
    }
}