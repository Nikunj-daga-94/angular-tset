import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
// import {} from '@angular/material'

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HeaderComponent } from "./header/header.component";
import { TableMapComponent } from "./table-map/table-map.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HeaderComponent,
    TableMapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
