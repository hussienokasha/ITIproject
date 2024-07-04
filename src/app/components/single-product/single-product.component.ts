import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/apiService/api.service';
interface Ip {
  image: string;
}
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {

  productId: any;
  productDetalis: any;

  constructor(public apiService: ApiService, public actRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this.actRoute.snapshot.params['id'];
    this.apiService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.productDetalis = data;
      },
    });
  }

}
