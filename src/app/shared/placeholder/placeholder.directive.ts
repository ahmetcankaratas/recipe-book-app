import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appPlaceholder]",
})

export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    // viewContainerRef is a reference to the place in the DOM where this directive is placed

  }
}
