import { handleActions, Action } from 'redux-actions';
import { PixaBayEntity  } from '../../business-layer/models';
import * as constants from '../../business-layer/constants/action-types';

export  interface State {
  ids: string[];
  entities: { [id: string]: PixaBayEntity };
}

const initialState: State = {
  ids: [],
  entities: {}
};

export default handleActions<State, PixaBayEntity>({
  [constants.STORE_PX_BAY_ENTITY]: (state: State, action: Action<PixaBayEntity>): State => {
      let images= <any>[];
      images = action.payload;
      const newImages = images.filter(image => !state.entities[image.id]);

      const newImagesIds = newImages.map(image => image.id);
      const newImagesEntities = newImages.reduce(
        (entities: { [id: string]: PixaBayEntity }, pxBayEntity: PixaBayEntity) => {
          return Object.assign(entities, {
            [pxBayEntity.id]: pxBayEntity,
          });
        })

      return {
        ids: [ ...state.ids,newImagesIds ],
        entities: Object.assign({}, state.entities, newImagesEntities)
      };
  },

}, initialState);