import * as React from 'react';
import { connect } from 'react-redux';
import { FlickerEntity, PixaBayEntity } from '../../../business-layer/models';
import Image from '../Image'
import Loader from '../Loader';


interface ImageProps extends React.Props<ImageRow> {
     pixaBayEntities?: PixaBayEntity[];
     flickers? : Array<FlickerEntity>;
}

interface State{
    fphotos:Array<any>;
}

export default class ImageRow extends React.Component<ImageProps, State> {

  constructor(props : ImageProps){
        super(props);

  }
    public mapPhotos(photoList:Array<any>){
         console.log('photoList ==',photoList)
         return photoList.map((photo)=> {
              const url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`;
              return (
                <Image urlSRC={url} key={photo.id} />
              )
            });
    }


   public render() {
       return (
          <div>
               {this.mapPhotos(this.props.flickers)}
          </div>
       );
  }
}