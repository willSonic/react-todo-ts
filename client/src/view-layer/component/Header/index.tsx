/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from "react";
import SingleInput from '../forms/SingleInput'
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';


interface HeaderProps {
  value: string;
  onChange : (event:any) => any;
  onSearch : (event:any) => any;
}

interface State {
   categoryInput:string
}


export default class Header extends React.Component<HeaderProps, undefined>  {
  constructor(props : Props){
      super(props);
      this.state = Object.assign({categoryInput:''})
  }


  public render() {
     return  <header>
               <div className="container">
                    <div className="s-grid-sticky-header-logo">
                        <h4 className="logo"> Images On Travel</h4>
                    </div>
                    <div className="s-grid-sticky-header-menu">
                     <label>Cateogry:</label>
                     <SingleInput
                         name="categoryCode"
                         label="categoryCode"
                         value={this.props.value}
                         onChange={this.props.onChange}/>
                     </div>
                     <div className="menu">
                          <input type="submit" value="Search"  onClick={this.props.onSearch} className="btn"/>
                            <span className='glyphicon glyphicon-search' />
                     </div>
                  </div>
             </header>
    }
}