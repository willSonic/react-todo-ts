import * as React from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PixaBayEntity, FlickerEntity } from '../../business-layer/models';
import { getPxBayEntities, fetchPxBayImages, getFlickerEntities, fetchFlickerImages }   from '../../data-layer/actions';
import pxBayReducer from '../../data-layer/reducers';
import Header from '../component/Header';
import Modal from  '../component/Modal';
import ImageRow from '../component/ImageRow';
import Footer from '../component/Footer';

require("!style-loader!css-loader!stylus-loader!./AppStage.styl");

const reactLogo = require("./react.svg");

interface State {
   imagePxInput:string;
   indexCount:number;
   modalIsOpen:boolean;
}

// extends React.Props<GeoPage>
interface AppStageProps  extends React.Props<AppStage>{
    imageInput? : string;
    pxBayEntities? : Array<PixaBayEntity>;
    flickerEntities? : Array<FlickerEntity>;
    getImagesByCategory? : (category:string) => void;
    loadImages? : () => void;
}

class AppStage extends React.Component<AppStageProps, State> {

    constructor(props : AppStageProps) {
        super(props);
        this.state = Object.assign({imagePxInput:'', modalIsOpen:false});
    }

    public toggleModal(event:any){
        console.log(' toggleModal =',event.target)
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    public getImages(event:any){
         event.preventDefault();
         if(this.state.imagePxInput !== undefined){
           this.props.getImagesByCategory(this.state.imagePxInput);
         }
    }

    public updateCategoryRequest(event:any){
		 var value = event.target.value;
         this.setState({imagePxInput:value})
    }

   public render() {
        return (<div className="react-root">
                    <Header
                        value={this.props.imageInput}
                        onChange={this.updateCategoryRequest.bind(this)}
                        onSearch={this.getImages.bind(this)}>
                   </Header>
                    <div className="main">
                        <div className="contaionImageViewner">
                           <ImageRow  onImageView={this.toggleModal.bind(this)}
                                      flickers={this.props.flickerEntities} ></ImageRow>
                        </div>
                    </div>
                    <Footer> </Footer>
                    <Modal show={this.state.modalIsOpen}
                           onClose={this.toggleModal}>
                        Here's some content for the modal
                    </Modal>
                </div>);
    }
}

// Container

const mapStateToProps =( (state:any) => {
    return {
        pxBayEntities:state.pxBayReducer.ids.map((id)=>state.pxBayReducer.entities[id]),
        flickerEntities:state.flickerReducer.ids.map((id)=> {
                 if(state.flickerReducer.entities[id])
                     return state.flickerReducer.entities[id]
        })
    }

});


const mapDispatchToProps = (dispatch:any) => {
  return {
          getImagesByCategory: (value:string) => {return dispatch(fetchFlickerImages(value))}
      }
};

const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object)=> {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

const AppContainerPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                  ,mergeProps
                                )(AppStage);


export default AppContainerPage;