import * as React from 'react';

require("!style-loader!css-loader!stylus-loader!./index.styl");


interface ModalProps extends React.Props<ModalProps> {
    onClose?: any;
    show?: boolean;
    children?: any;
}

export default class Modal extends React.Component<ModalProps, {}> {

    constructor(props : ModalProps){
        super(props);
        console.log( 'Modal =',props.show)
        if(!props.show) {
            return null;
        }
    }


    public render() {
        return this.props.show ? (
            <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}

                    <div className="footer">
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        ):null;
    }
}