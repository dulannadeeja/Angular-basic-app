import { Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class AppDropdownDirective{
  @HostBinding('class.show') show: boolean=false;
  @HostListener('click') hostClick():void{
    this.show=!this.show;
  }
  constructor(private _elementRef:ElementRef){}
}
