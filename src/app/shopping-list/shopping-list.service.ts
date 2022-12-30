import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService{
    ingredientsChanged = new Subject<ingredient[]>();

    startedEditing = new Subject<number>();

    private ingredients: ingredient[] = [
        new ingredient('Apples', 5),
        new ingredient('Tomatoes', 10)
        
      ];

      addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredient(index: number){
        return this.ingredients[index];
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

      updateIngredient(index: number, newIngredient: ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}