import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {

  @Input()

  product: IProduct;

  constructor() {
  }

  ngOnInit(): void {
  }

}
