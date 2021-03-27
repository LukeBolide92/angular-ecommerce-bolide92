import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share(product) {
    window.alert(
      "Hai appena effettuato l'acquisto per il valore di " +
        product.price +
        "€, grazie per aver acquistato da noi"
    );
  }

  // reaction on notfy event emitted from child component
  onNotify(product) {
    window.alert(
      "You will be notified when the product '" +
        product.name +
        "' goes on sale"
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
