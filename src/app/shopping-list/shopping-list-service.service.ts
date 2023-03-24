import { EventEmitter, Injectable } from '@angular/core';
import Ingredient from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredientsList: Ingredient[]=[new Ingredient('apple', 2 , 'Kg')];

  ingredientsChangedEvent: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor() { }

  get ingredients(): Ingredient[] {
    return this.ingredientsList.slice();
  }

  onIngredientAdded(ingredientObj:Ingredient){
    this.ingredientsList.push(ingredientObj);
    this.ingredientsChangedEvent.emit(this.ingredientsList.slice());
  }

  onRecipeAdded(ingredients:Ingredient[]){
    this.ingredientsList.push(...ingredients);
    this.ingredientsChangedEvent.emit(this.ingredientsList.slice());
  }
}
