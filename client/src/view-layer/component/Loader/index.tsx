/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from "react";

const Loader = () => {
     return (
            <div className="load1">
              <div className="loader"> Loading... </div>
            </div>);
}

export default Loader;