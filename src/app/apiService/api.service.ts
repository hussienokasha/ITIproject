import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  rootApi: string = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${this.rootApi}/products`);
  }
  getProductById(id: any) {
    return this.http.get(`${this.rootApi}/products/${id}`);
  }
  getCartNum(): any {
    let localData = localStorage.getItem('cart');
    if (localData) return (JSON.parse(localData)).length;
  }
}
