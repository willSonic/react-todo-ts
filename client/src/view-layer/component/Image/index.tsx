/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from 'react';

interface ImageProps extends React.Props<Image> {
   urlSRC? :string;
}
export default class Image extends React.Component<ImageProps, {}> {
  constructor(props : ImageProps){
        super(props);
  }

   public render() {
       return (
            <div>
              <img  alt="" src={this.props.urlSRC} />
            </div>
       )
  }
}

