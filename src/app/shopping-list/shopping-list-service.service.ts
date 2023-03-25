import { Injectable } from '@angular/core';
import Ingredient from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredientsList: Ingredient[]=[new Ingredient('apple', 2 , 'Kg')];

  ingredientsChangedEvent: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  constructor() { }

  get ingredients(): Ingredient[] {
    return this.ingredientsList.slice();
  }

  onIngredientAdded(ingredientObj:Ingredient){
    this.ingredientsList.push(ingredientObj);
    this.ingredientsChangedEvent.next(this.ingredientsList.slice());
  }

  onRecipeAdded(ingredients:Ingredient[]){
    this.ingredientsList.push(...ingredients);
    this.ingredientsChangedEvent.next(this.ingredientsList.slice());
  }
}
