import * as _ from 'lodash';
import { ADD_GROCERY_ITEM, START_NEW_SHOPPING_TRIP, MARK_ITEM_SHOPPED, MODIFY_GROCERY_ITEM } from '../actions'

export const shoppingList = (state = [], action) => {
  switch(action.type) {
    case ADD_GROCERY_ITEM:
      const newGroceryItem = {
        ...action.groceryItem,
        shopped: false
      };
      return [...state, newGroceryItem];
      
    case START_NEW_SHOPPING_TRIP:
      return [];

    case MARK_ITEM_SHOPPED: 
      return state.map(groceryItem => {
        if (groceryItem.id === action.groceryItemId) {
          return {
            ...groceryItem,
            shopped: true,
          }
        } else {
          return groceryItem;
        }
      });
    
    default:
      return state;
  }
}

export const selectShoppingList = (state) => state.shoppingList;
export const selectGroceryItem = (state, id) => _.find(state.shoppingList, { id });
