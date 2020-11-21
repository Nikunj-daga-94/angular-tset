import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
export interface Info {
  displayElement: boolean;
  matchValue: number;
}

@Injectable()
export class ConstantsService {
  info: Info = { displayElement: true, matchValue: 38 };
  // displayElement = false;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  changeValue: Subject<Number> = new Subject<Number>();

  constructor() {
    this.info.displayElement = false;
    this.info.matchValue = 38;
  }

  toggleSidebarVisibility(bool) {
    this.sidebarVisibilityChange.next(bool);
  }
  togglematchValue(val: Number) {
    this.changeValue.next(val);
  }
  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this.sidebarVisibilityChange.unsubscribe();
    this.changeValue.unsubscribe();
  }
}
