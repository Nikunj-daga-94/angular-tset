import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ConstantsService {
  displayElement = false;
  isSidebarVisible: boolean;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sidebarVisibilityChange.subscribe(value => {
      this.displayElement = value;
    });
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange.next(!this.displayElement);
  }
  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this.sidebarVisibilityChange.unsubscribe();
  }
}
