/**
 * Created by willstreeter on 8/18/17.
 */

require("!style-loader!css-loader!stylus-loader!./index.styl");
import * as React from "react";
import SingleInput from '../forms/SingleInput'
//import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';


interface HeaderProps {
  value: string;
  onChange : (event:any) => any;
  onSearch : (event:any) => any;
}

interface State {
   categoryInput:string
}


export default class Header extends React.Component<HeaderProps, State>  {
  constructor(props : HeaderProps){
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
                        <div className="menu">
                            <span className='glyphicon glyphicon-search'  onClick={this.props.onSearch}  />
                             <SingleInput
                                 name="categoryCode"
                                 placeholder="category"
                                 label="categoryCode"
                                 value={this.props.value}
                                 onChange={this.props.onChange}/>
                        </div>
                    </div>
               </div>
             </header>
    }
}