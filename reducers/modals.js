import * as _ from 'lodash';

import { SHOW_MODAL, HIDE_MODAL, MODAL_TYPES} from '../actions'

const ALL_MODALS_HIDDEN = {
  ADD_NEW_ITEM: { visible: false },
  CONFIRM_NEW_SHOPPING_TRIP: { visible: false },
  ACTION_PER_ITEM: { visible: false },

  groceryItemIdAtSpot: null
};

export const modals = (state = ALL_MODALS_HIDDEN, action ) => {
  const allModalsHidden = _.clone(ALL_MODALS_HIDDEN);
  switch (action.type) {
    case SHOW_MODAL:
      switch (action.modal) {
        case MODAL_TYPES.ACTION_PER_ITEM:
          const tmp = _.set(allModalsHidden, MODAL_TYPES.ACTION_PER_ITEM, { visible: true });
          return _.set(tmp, 'groceryItemIdAtSpot', action.id);
        default:
          return _.set(allModalsHidden, action.modal, { visible: true });
      }

    case HIDE_MODAL:
      return allModalsHidden;

    default:
      return state;
  }
}

export const selectModalVisible = (state, MODAL_TYPE) => state.modals[MODAL_TYPE].visible;
export const selectGroceryItemAtSpot = (state) => state.modals.groceryItemIdAtSpot;
