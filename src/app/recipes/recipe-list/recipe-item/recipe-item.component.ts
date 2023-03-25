import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recipe from '../../recipe.model';
import { RecipeService } from '../../recipe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!:Recipe;

  constructor(private recipeService:RecipeService,private router:Router){}

  onRecipeClicked=(recipe:Recipe)=>{
    this.router.navigate(['recipes',recipe.recipeId]);
  }
}
