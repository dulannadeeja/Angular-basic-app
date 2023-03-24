export interface IngredientModel {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export default class Ingredient implements IngredientModel {

  constructor(private _id: number, private _name: string, private _amount: number, private _unit: string) {
  }

  get id(): number {return this.id;}
  get name():string{return this._name}
  get amount():number{return this._amount}
  get unit():string{return this._unit}
}
