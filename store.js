import { combineReducers, createStore } from 'redux';

import { shoppingList, modals } from './reducers';

export const store = createStore(combineReducers({
    shoppingList,
    modals,
}));
