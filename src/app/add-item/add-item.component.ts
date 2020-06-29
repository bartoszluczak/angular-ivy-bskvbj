import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PRODUCTS } from '../products';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemToList = new FormGroup ({
    productName: new FormControl(''),
    productDescription: new FormControl(''),
    productPrice1: new FormControl(''),
    productPrice2: new FormControl(''),
    productPrice3: new FormControl(''),
    productIMGLink: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    /* console.warn(this.addItemToList.value.productName); */
    PRODUCTS.push({id:PRODUCTS.length+1,  name: this.addItemToList.value.productName, description: this.addItemToList.value.productDescription, price1: this.addItemToList.value.productPrice1, price2: this.addItemToList.value.productPrice2, price3: this.addItemToList.value.productPrice3, imgLink: this.addItemToList.value.productIMGLink});
    
  }


}
