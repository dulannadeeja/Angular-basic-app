import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import RecipeList from './recipeList.model';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService:RecipeService){}

  recipeList:Recipe[]=[];

  ngOnInit(): void {
    this.recipeList= this.recipeService.recipes
  }
}
