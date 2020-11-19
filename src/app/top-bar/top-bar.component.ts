import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { products, agentMock } from "../products";
import { scriptList } from "../../assets/transcript";
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
  // animations: [
  //   trigger("routerAnimations", [
  //     state("collapsed", style({ height: "0px", minHeight: "0" })),
  //     state("expanded", style({ height: "*" })),
  //     transition(
  //       "expanded <=> collapsed",
  //       animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
  //     )
  //   ])
  // ]
})
export class TopBarComponent implements OnInit {
  constructor() {}
  // selected = "option2";
  foods = agentMock;
  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
