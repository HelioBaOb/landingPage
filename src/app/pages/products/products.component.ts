import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{

  productList : IProduct[] = [];

  private _apiService = inject(ApiServiceService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productList = data;
    });
  }

  navegate(id: number){
    this._router.navigate([`/products/${id}`]);
  }

  


}
