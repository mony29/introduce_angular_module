import { Component } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  getProduct : IProduct[] = []

  constructor ( private productService : ProductService){
    this.getProduct = this.productService.product;
  }
}
