import { Action } from "@ngrx/store";
import { ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [new ingredient("Apples", 5), new ingredient("Tomatoes", 10)],
};

export function shoppingListReducer(
    state = initialState, 
    action: ShoppingListActions.ShoppingListActions
    ) {
  
    switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    default:
        return state;
    }
}
