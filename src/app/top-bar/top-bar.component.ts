import { Component, OnInit } from "@angular/core";
import { products, agentMock } from "../products";
import mckCall from "../../assets/mack-call.json";
// import { ConstantsService } from "./constants.service";
import { ConstantsService } from "../constants.service";
// import { MatSelectModule } from "@angular/material/select";
interface Food {
  name: string;
  price: number;
  description: string;
}
@Component({
  // selector: "select-value-binding-example",
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  displayElement: boolean;
  matValue: Number;
  constructor(private _constant: ConstantsService) {
    this._constant.changeValue.subscribe(value => {
      this.matValue = value;
    });
    this.matValue = this._constant.info.matchValue;
    this.displayElement = this._constant.info.displayElement;
    this._constant.sidebarVisibilityChange.subscribe(value => {
      this.displayElement = value;
    });
  }
  gridsize: number = 38;
  pitch(event) {
    this.gridsize = event.value;
    this._constant.togglematchValue(event.value);
  }
  // selected = "option2";
  idVal: String;
  value: String;
  foods = agentMock;
  mockCall = mckCall.map(
    data =>
      data.call_start_time
        .substr(0, 10)
        .split("-")
        .reverse()
        .join(".") +
      " - " +
      data.customer[0].full_name
  );
  onAgentSelect(value) {
    if (value) {
      this.idVal = this.foods.find(data => data.full_name == value).agent_id;
      // console.log(this.idVal);
    } else this.idVal = null;
    this.change();
  }
  onCallChange(value) {
    if (value) {
      const callname = value.split(" - ")[1];
      this.value = callname;
    } else this.value = null;
    console.log(this.value);
    this.change();
  }
  change() {
    if (
      this.idVal &&
      this.value &&
      this.idVal.length > 0 &&
      this.value.length > 0
    ) {
      this._constant.toggleSidebarVisibility(true);
    } else {
      this._constant.toggleSidebarVisibility(false);
    }
  }
  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
