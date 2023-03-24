import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{

  @Input() recipe!:Recipe
  isCollapsed: boolean = true;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
  }

}
