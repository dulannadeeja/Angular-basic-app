import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('ingredientNameInput') ingredientNameInput!:ElementRef
  @ViewChild('ingredientAmountInput') ingredientAmountInput!:ElementRef
  @ViewChild('ingredientUnitInput') ingredientUnitInput!:ElementRef

  @Output() onIngredientAddEvent = new EventEmitter<{name:string,amount:number,unit:string}>();

  ingredientName:string="";
  ingredientAmount:number=0;
  ingredientUnit:string="";

  newIngredient!:Ingredient;

  onIngredientAdd=()=>{
    this.ingredientName=this.ingredientNameInput.nativeElement.value
    this.ingredientAmount=parseInt(this.ingredientAmountInput.nativeElement.value)
    this.ingredientUnit=this.ingredientUnitInput.nativeElement.value

    this.onIngredientAddEvent.emit({name:this.ingredientName,amount:this.ingredientAmount,unit:this.ingredientUnit});
  }
  onIngredientDelete=()=>{}
  onIngredientClear=()=>{}

}
