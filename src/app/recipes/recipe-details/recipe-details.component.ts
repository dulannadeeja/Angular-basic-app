import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe-service.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  isCollapsed: boolean = true;

  recipeId: number = 0;
  paramsSubscriber!: Subscription

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }

  onAddedShoppingList() {
    this.shoppingListService.onRecipeAdded(this.recipe!.ingredient);
    alert(this.recipe!.ingredient);
  }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.findRecipeById(this.recipeId) as Recipe;

    this.paramsSubscriber = this.route.params.subscribe(params => {
      this.recipeId = +params['id']
      this.recipe = this.recipeService.findRecipeById(this.recipeId) as Recipe;
    });
  }

}
