import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /* selectedProduct: Product; */
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  /* onSelect(product: Product): void {
   this.selectedProduct = product;
  } */


  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  

  
};