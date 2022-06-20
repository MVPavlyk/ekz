import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces';

@Component({
  selector: 'app-app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.css']
})
export class AppProductsComponent implements OnInit {

  products: IProduct[] = [
    {
      price: '500$',
      type: 'phones',
      name: 'IPhone'
    },
    {
      price: '400$',
      type: 'laptops',
      name: 'MacBook'
    },
    {
      price: '200$',
      type: 'earphones',
      name: 'AirPods'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
