import { inject, Injectable } from '@angular/core';
import { Product } from '../../component/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/products';

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  };
}
