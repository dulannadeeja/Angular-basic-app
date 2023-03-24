import { Component, OnInit } from '@angular/core';
import Ingredient from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredientList: Ingredient[] = [];

  constructor(private _shoppingListService:ShoppingListService){}

  ngOnInit(): void {
    this.ingredientList=this._shoppingListService.ingredients
    this._shoppingListService.ingredientsChangedEvent.subscribe(ingredient => this.ingredientList=ingredient);
  }

}
