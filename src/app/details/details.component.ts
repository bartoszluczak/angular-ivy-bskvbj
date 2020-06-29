import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() product: Product;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }



  
}
