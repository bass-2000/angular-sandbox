import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appPlaceholder]'})
export class PlaceholderDirective {

  // tslint:disable-next-line:variable-name
  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
