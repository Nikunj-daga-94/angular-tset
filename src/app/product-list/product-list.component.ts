import { Component, OnInit } from "@angular/core";
import { agentMock } from "../products";
import transcript from "../../assets/transcript.json";
import { ConstantsService } from "../constants.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = agentMock;
  displayElement: boolean;
  constructor(private _constant: ConstantsService) {
    this.displayElement = this._constant.displayElement;
  }
  change() {
    this._constant.toggleSidebarVisibility();
  }
  ngOnInit(): void {}

  //prevent memory leak when component destroyed
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
