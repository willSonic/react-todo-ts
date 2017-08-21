import { handleActions, Action } from 'redux-actions';
import { FlickerEntity  } from '../../business-layer/models';
import * as constants from '../../business-layer/constants/action-types';

export  interface State {
  ids: string[];
  entities: { [id: string]: FlickerEntity };
}

const initialState: State = {
  ids: [],
  entities: {}
};

export default handleActions<State, FlickerEntity>({
  [constants.STORE_FLICKER_ENTITY]: (state: State, action: Action<FlickerEntity>): State => {
      let images= <any>[];
      images = action.payload;
      const newImages = images.filter(image => !state.entities[image.id]);

      const newImagesIds = newImages.map(image => image.id);
      const newImagesEntities = newImages.reduce(
        (entities: { [id: string]: FlickerEntity }, flickerEntity: FlickerEntity) => {
          return Object.assign(entities, {
            [flickerEntity.id]: flickerEntity,
          });
        })

      return {
        ids: [ ...state.ids,newImagesIds ],
        entities: Object.assign({}, state.entities, newImagesEntities)
      };
  },

}, initialState);