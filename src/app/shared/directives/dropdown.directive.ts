import { Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class AppDropdownDirective{
  @HostBinding('class.open') open: boolean=false;
  @HostListener('click') hostClick():void{
    this.open=!this.open;
  }

  constructor(private _elementRef:ElementRef){}
}
