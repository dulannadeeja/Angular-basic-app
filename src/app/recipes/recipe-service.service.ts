import { EventEmitter, Injectable } from '@angular/core';
import Recipe from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeList: Recipe[] = [];

  onRecipeClickedEvent: EventEmitter<Recipe>=new EventEmitter<Recipe>();

  constructor() {
    this.recipeList = [new Recipe(1, "test recipe-01", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipe(2, "test recipe-02", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipe(3, "test recipe-03", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipe(4, "test recipe-04", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipe(5, "test recipe-05", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg")];
  }

  get recipes(): Recipe[] {
    return this.recipeList.slice(0, this.recipeList.length);
  }

}
