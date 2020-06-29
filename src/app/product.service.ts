import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return (PRODUCTS);
  }

  getProduct(id: number): Product {
    return (PRODUCTS.find(product => product.id === id))
  }



  
  constructor() { }
};
