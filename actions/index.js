export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const START_NEW_SHOPPING_TRIP = 'START_NEW_SHOPPING_TRIP';
export const MARK_ITEM_SHOPPED = 'MARK_ITEM_SHOPPED';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const MODAL_TYPES = Object.freeze({
  ADD_NEW_ITEM: 'ADD_NEW_ITEM',
  ACTION_PER_ITEM: 'ACTION_PER_ITEM',
  CONFIRM_NEW_SHOPPING_TRIP: 'CONFIRM_NEW_SHOPPING_TRIP',
});

export const addGroceryItem = (groceryItem) => ({
  type: ADD_GROCERY_ITEM,
  groceryItem,
});

export const startNewShoppingTrip = () => ({
  type: START_NEW_SHOPPING_TRIP,
});

export const markItemShopped = (groceryItemId) => ({  
  type: MARK_ITEM_SHOPPED,
  groceryItemId,
});

export const takeActionOnItem = (id) => ({
  type: SHOW_MODAL,
  modal: MODAL_TYPES.ACTION_PER_ITEM,
  id,
});

export const showModal = (modalType) => ({
  type: SHOW_MODAL,
  modal: modalType,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
