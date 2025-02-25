import {Component, input} from '@angular/core';
import {ProductData} from '../../../models/product-data';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  productInput = input.required<ProductData>();

  product : ProductData =
  {
    id: 0,
    name: "",
    price: 0,
    imageURL: "",
    description: "",
    tags: []
  }

  ngOnInit(): void {
     this.product = this.productInput();
  }

}
