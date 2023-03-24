import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recipe from '../../recipe.model';
import { RecipeService } from '../../recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!:Recipe;

  constructor(private recipeService:RecipeService){}

  onRecipeClicked=(recipe:Recipe)=>{
    this.recipeService.onRecipeClickedEvent.emit(recipe);
    console.log(`clicked recipe ID: ${recipe.recipeId}`);
  }
}
