import { EventEmitter, Injectable } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new ingredient('Meat', 1),
            new ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new ingredient('Buns', 2),
            new ingredient('Meat', 1)
          ])
      ];

    constructor(private shoppingListService: ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice(); // slice() returns a copy of the array
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
    }
}