import { Injectable } from '@angular/core';
import Recipe from './recipe.model';
import Ingredient from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeList: Recipe[] = [];

  constructor() {
    this.recipeList = [new Recipe(1, "test recipe-01", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[new Ingredient('karabunati',10,'g')]),
    new Recipe(2, "test recipe-02", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[new Ingredient('karabunati',10,'g')]),
    new Recipe(3, "test recipe-03", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[new Ingredient('karabunati',10,'g')]),
    new Recipe(4, "test recipe-04", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[new Ingredient('karabunati',10,'g')]),
    new Recipe(5, "test recipe-05", "recipe discription goes here", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[new Ingredient('karabunati',10,'g')])];
  }

  get recipes(): Recipe[] {
    return this.recipeList.slice(0, this.recipeList.length);
  }

  findRecipeById(id: number): Recipe|undefined{
    return this.recipeList.find(recipe => recipe.recipeId === id)
  }

}
