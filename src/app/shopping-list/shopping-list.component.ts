import { Component } from '@angular/core';
import Ingredient from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredientList: Ingredient[] = [];
  newId:number = 0;
  newIngredient!:Ingredient;

  onIngredientAdded(ingredientObj:{name:string,amount:number,unit:string}){
    this.newId=this.ingredientList.length+1;
    this.newIngredient=new Ingredient(this.newId,ingredientObj.name,ingredientObj.amount,ingredientObj.unit);
    this.ingredientList.push(this.newIngredient);
    console.log(this.ingredientList);
  }
}
