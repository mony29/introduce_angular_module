import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product : IProduct[] = [
    {
      id : 1,
      name : 'cocacola',
      price : 2000
    },
    {
      id : 2,
      name : 'red-bull',
      price : 2500
    }
  ]
}
