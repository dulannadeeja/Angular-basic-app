import { Component, OnInit } from '@angular/core';
import RecipeList from './recipe-list/recipeList.model';
import Recipe from './recipe.model';
import { RecipeService } from './recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  clickedRecipe!:Recipe

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.onRecipeClickedEvent.subscribe((recipe:Recipe)=>{
      this.clickedRecipe=recipe
    })
  }

}
