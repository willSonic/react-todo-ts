import * as React from 'react';
import { FlickerEntity, PixaBayEntity } from '../../../business-layer/models';
import Image from '../Image';


interface ImageProps extends React.Props<ImageRow> {
     pixaBayEntities?: PixaBayEntity[];
     flickers? : Array<FlickerEntity>;
     onImageView?: (event:any) => any;
}

interface State{
    fphotos:Array<any>;
}

export default class ImageRow extends React.Component<ImageProps, State> {

   constructor(props : ImageProps){
        super(props);
   }

    public mapPhotos(photoList:Array<FlickerEntity>){
        if(photoList.length>0){
            return photoList.map((photo)=> {
                if(photo){
                    const url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`;
                    return (
                        <Image
                            id={photo.id}
                            callbackParent={this.props.onImageView}
                            urlSRC={url}
                            key={photo.id}/>
                    )
                }
            });
        }
    }


   public render() {
       return (
          <div className="content">
               {this.mapPhotos(this.props.flickers)}
          </div>
       );
  }
}