import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private _http = inject(HttpClient);
  private urlBase : string = 'https://fakestoreapi.com/products';

  public getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  public getProductById(id: number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
  
}
