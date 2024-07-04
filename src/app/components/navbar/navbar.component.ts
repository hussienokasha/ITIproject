import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cartNum: number = 0;
  constructor(public cartService: ApiService) {}
  ngOnInit(): void {
    setInterval(() => {
      this.cartNum = this.cartService.getCartNum();
    }, 500);
  }
}
