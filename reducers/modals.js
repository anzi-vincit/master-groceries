import * as _ from 'lodash';

import { SHOW_MODAL, HIDE_MODAL, MODAL_TYPES } from '../actions'

const ALL_MODALS_HIDDEN = _
  .chain(MODAL_TYPES)
  .keys()
  .map(item => [item, false])
  .fromPairs()
  .value();

export const modals = (state = ALL_MODALS_HIDDEN, action ) => {
  switch (action.type) {
    case SHOW_MODAL:
      const newState = { ...state };
      return _.set(newState, action.modal, true);

    case HIDE_MODAL:
      return { ...ALL_MODALS_HIDDEN };

    default:
      return state;
  }
}

export const selectModals = (state) => state.modals;