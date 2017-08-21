import * as React from "react";
import { connect } from 'react-redux';
import { PixaBayEntity } from '../../business-layer/models';
import { getPxBayEntities, fetchPxBayImages }   from '../../data-layer/actions';
import Header from '../component/Header';
import Footer from '../component/Footer';

require("!style-loader!css-loader!stylus-loader!./AppStage.styl");

const reactLogo = require("./react.svg");

interface State {
   imagePxInput:string;
   indexCount:number;
}

// extends React.Props<GeoPage>
interface Props  extends React.Props<AppStage>{
    imageInput?:string;
    pxBayEntities?: Array<PixaBayEntity>;
    getImagesByCategory?: (category:string) => void;
    loadImages? : () => void;
}

class AppStage extends React.Component<Props, State> {

    constructor(props : Props) {
        super(props);
        this.state = Object.assign({imagePxInput:''});
    }

    public componentDidMount() {
     this.props.loadImages();
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
        return (<div className="app">
                    <Header
                        value={this.props.imageInput}
                        onChange={this.updateCategoryRequest.bind(this)}
                        onSearch={this.getImages.bind(this)}
                    > </Header>
                    <div className="main">
                        <h1>Hello World!</h1>
                        <p>First, let’s open one of the Meteor project templates which uses sGrid helper classes: promo.html. You can see here how it is used and then let’s open the main style.styl file of the same app. As you can see, we’ve just imported all three sGrid .styl files including the file with classes which we’ve used in the promo template. Promo template uses some responsive sGrid classes like ‘s-grid-cell-sm-12 s-grid-cell-md-10’ I am sure that you know it from, for example, Bootstrap grid. This is the same. We have 12 columns on the small screen and 10 on the bigger one. You can copy and overwrite the config file from s-grid-settings.styl file.</p>
                        <img src={reactLogo}/>
                    </div>
                    <Footer> </Footer>
                </div>);
    }
}

// Container

const mapStateToProps =( (state:any) => {
    //console.log('mapStateToProps = ', state.geoReducer.zips)
    return {
        pxBayEntities:state.pxBayReducers.ids.map((ids)=>state.pxBayReducers.entities[ids])
    }

});


const mapDispatchToProps = (dispatch:any) => {
  return {
          getImagesByCategory: (value:string) => {return dispatch(fetchPxBayImages(value))},
          loadImages: () => {return dispatch(getPxBayEntities())}
      }
}

const AppContainerPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(AppStage);


export default AppContainerPage;