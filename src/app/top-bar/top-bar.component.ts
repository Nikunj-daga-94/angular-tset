import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { products, agentMock } from "../products";
import scriptList from "../../assets/transcript.json";
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
  constructor(private _constant: ConstantsService) {}
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
    this.idVal = this.foods.find(data => data.full_name == value).agent_id;
    // console.log(this.idVal);
    this.change();
  }
  onCallChange(value) {
    const callname = value.split(" - ")[1];
    this.value = callname;
    console.log(callname);
    this.change();
  }
  change() {
    if (this.idVal.length > 0 && this.value.length > 0) {
      this._constant.toggleSidebarVisibility();
    }
  }
  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
