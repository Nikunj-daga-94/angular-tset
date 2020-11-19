import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { products, agentMock } from "../products";
import scriptList from "../../assets/transcript.json";
import mckCall from "../../assets/mack-call.json";
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
  constructor() {}
  // selected = "option2";
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
    const id = this.foods.find(data => data.full_name == value).agent_id;
    console.log(id);
  }
  onCallChange(value) {
    const callname = value;
    console.log(callname.split(" - ")[1]);
  }
  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
