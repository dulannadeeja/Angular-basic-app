export interface IngredientModel {
  name: string;
  amount: number;
  unit: string;
}

export default class Ingredient implements IngredientModel {

  constructor(private _name: string, private _amount: number, private _unit: string) {
  }


  get name():string{return this._name}
  get amount():number{return this._amount}
  get unit():string{return this._unit}
}
