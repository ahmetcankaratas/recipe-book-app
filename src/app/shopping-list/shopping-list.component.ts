import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: ingredient[] }>;
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select("shoppingList");
    // Good Practice: all initialization logic should be in ngOnInit()
    // this.ingredients = this.shoppingListService.getIngredients();

    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
