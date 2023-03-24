export interface RecipeModel {
  recipeId: number,
  recipeName: string,
  recipeDesc: string,
  recipeImgPath: string
}

export default class Recipe implements RecipeModel {

  constructor(
    private _recipeId: number,
    private _recipeName: string,
    private _recipeDesc: string,
    private _recipeImgPath: string) { }

  get recipeId(): number { return this._recipeId; }
  get recipeName(): string { return this._recipeName; }
  get recipeDesc(): string { return this._recipeDesc; }
  get recipeImgPath(): string { return this._recipeImgPath; }

}
