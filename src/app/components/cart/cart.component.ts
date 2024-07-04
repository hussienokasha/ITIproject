import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartArr: any[] = [];
  totalPrice: number = 0;
  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
    let cartData = localStorage.getItem('cart');
    if (cartData) this.cartArr = JSON.parse(cartData);
    console.log(this.cartArr);
    this.calcTotalPrice();

  }
  calcTotalPrice() {
    this.totalPrice = 0;
    for (let i in this.cartArr) {
      this.totalPrice +=
        this.cartArr[i].element.price * this.cartArr[i].quantity;
    }
  }
  delateItem(itemId: any) {
    if (confirm('Are You Sure You Want to Delete'))
      this.cartArr = this.cartArr.filter((item) => item.element.id != itemId);
    localStorage.setItem('cart', JSON.stringify(this.cartArr));
    this.calcTotalPrice();
  }
}
