import * as React from 'react';

interface Props extends React.Props<Input> {
  name : string;
  label : string;
  value:string;
  onChange : any;
  placeholder? : string;
}
export default class Input extends React.Component<Props, {}> {
  constructor(props : Props){
        super(props);
  }


   public render() {
       return (
          <input type="text"
                name={this.props.name}
                className="form-control"
                placeholder={this.props.placeholder}
                ref={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange} />
       );
  }
}
