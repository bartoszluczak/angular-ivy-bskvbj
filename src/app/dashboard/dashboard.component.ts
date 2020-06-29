import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Product } from '../product'
import { ProductService } from '../product.service';
import { PRODUCTS } from '../products';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

 

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  };

  getProducts(): void {
    this.products = this.productService.getProducts();
  };

  onDelete(productToDeleteID) {
    for(var i = 0;i < PRODUCTS.length; i++){
        if(productToDeleteID == PRODUCTS[i].id) {
          PRODUCTS.splice(i,1);
            break;
        }
    }
  }


}
