import { ingredient } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<ingredient[]>();

    private ingredients: ingredient[] = [
        new ingredient('Apples', 5),
        new ingredient('Tomatoes', 10)
        
      ];

      addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredients: ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient);
        // }
        // Alternative
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}