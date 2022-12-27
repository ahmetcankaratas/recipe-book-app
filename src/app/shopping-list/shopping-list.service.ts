import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService{
    ingredientsChanged = new Subject<ingredient[]>();

    private ingredients: ingredient[] = [
        new ingredient('Apples', 5),
        new ingredient('Tomatoes', 10)
        
      ];

      addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
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
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}