import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allproducts: any[] = [];
  dataCompleted!: boolean;
  carts: any[] = [];
  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
    this.dataCompleted = false;
    this.apiService.getAllProducts().subscribe({
      next: (data: any) => {
        this.allproducts.push(...data);
        this.dataCompleted = true;
        console.log(this.carts)

      },
    });
    let cartData = localStorage.getItem('cart');
    if (cartData) this.carts.push(...JSON.parse(cartData));
  }
  addToCart(element: any) {
    const isAlreadyInCart = this.carts.some(
      (cartItem) => cartItem.element.id === element.id
    );
    if (!isAlreadyInCart) {
      this.carts.push({element:element,quantity:1});
      localStorage.setItem('cart', JSON.stringify(this.carts));
    }
    else{
      alert('This Item is aleady in Cart')
    }

  }
}
