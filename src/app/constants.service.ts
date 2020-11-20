import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
export interface Info {
  displayElement: boolean;
}
@Injectable()
export class ConstantsService {
  info: Info = { displayElement: false };
  // displayElement = false;
  isSidebarVisible: boolean;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.info.displayElement = false;
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange.next(!this.info.displayElement);
  }
  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this.sidebarVisibilityChange.unsubscribe();
  }
}
