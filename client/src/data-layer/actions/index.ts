/**
 * Created by willstreeter on 8/14/17.
 */
import { createAction, Action } from 'redux-actions'
import * as constants from '../../business-layer/constants/action-types';
import { PixaBayEntity } from '../../business-layer/models';


const  fetchPxBayImages = createAction(
       constants.FETCH_PX_BAY_IMAGES,
       (category:string) => ({ category })
      );


const  storePxBayEntity = createAction(
       constants.STORE_PX_BAY_ENTITY,
       (pxBayEntities:PixaBayEntity[]) => (pxBayEntities)
      );




const  getPxBayEntity = createAction(
       constants.GET_PX_BAY_ENTITY,
       (text: string) => ({ text })
      );


const  getPxBayEntities = createAction(
       constants.GET_PX_BAY_ENTITIES,
        () => { }
      );



const  httpCallStarted = createAction(
       constants.HTTP_GET_CALL_STARTED,
        () => { }
      );


const  httpCallCompleted = createAction(
       constants.HTTP_GET_CALL_COMPLETED,
        () => { }
      );


export {
  fetchPxBayImages,
  storePxBayEntity,
  getPxBayEntity,
  getPxBayEntities,
  httpCallStarted,
  httpCallCompleted
}