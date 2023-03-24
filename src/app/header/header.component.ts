import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed: boolean = false;

  @Output() recipeClickEvent=new EventEmitter<void>();
  @Output() shoppingListClickEvent=new EventEmitter<void>();

  onRecipeClick=()=>{
    this.recipeClickEvent.emit();
    console.log("Recipe Clicked!")
  }

  onShoppingListClick=()=>{
    this.shoppingListClickEvent.emit();
    console.log("shopping List Clicked!")
  }
}
