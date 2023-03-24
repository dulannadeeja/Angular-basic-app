import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe-service.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{

  @Input() recipe!:Recipe
  isCollapsed: boolean = true;

  constructor(private recipeService: RecipeService,private shoppingListService:ShoppingListService){}

  toggleDropdown(){
    this.isCollapsed=!this.isCollapsed;
  }

  onAddedShoppingList(){
    this.shoppingListService.onRecipeAdded(this.recipe.ingredient);
    alert(this.recipe.ingredient);
  }

  ngOnInit(): void {
  }

}
