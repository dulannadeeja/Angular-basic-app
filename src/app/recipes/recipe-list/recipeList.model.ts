import Recipe from "../recipe.model";

export interface RecipeListModel {
  list: Recipe[];
  addRecipe(item: Recipe): void;
  removeRecipe(id: number): void;
}

export default class RecipeList implements RecipeListModel {


  static instance: RecipeList = new RecipeList();

  private constructor(private _list: Recipe[] = []) { }

  get list(): Recipe[] { return this._list; }

  addRecipe(item: Recipe): void {
    this._list.push(item);
  }

  removeRecipe(id: number): void {
    this._list = this._list.filter((item) => item.recipeId !== id);
  }
}
