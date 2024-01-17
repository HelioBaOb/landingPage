import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  loading : Boolean = true;
  public product? : IProduct; 

  private _router = inject(ActivatedRoute);
  private _apiService = inject(ApiServiceService);

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
  }

}
