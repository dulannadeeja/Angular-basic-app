import { Component, OnDestroy, OnInit } from '@angular/core';
import Ingredient from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingredientList: Ingredient[] = [];
  subscription!: Subscription

  constructor(private _shoppingListService:ShoppingListService){}

  ngOnInit(): void {
    this.ingredientList=this._shoppingListService.ingredients
    this.subscription=this._shoppingListService.ingredientsChangedEvent.subscribe(ingredient => this.ingredientList=ingredient);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
