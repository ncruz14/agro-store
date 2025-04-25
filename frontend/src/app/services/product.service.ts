import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Product {
  _id: string;
  name: string;
  category: string;
  image: string | null;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:4000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          image:
            product.image && product.image.trim() !== ''
              ? product.image
              : 'https://us.123rf.com/450wm/rashadashurov/rashadashurov2002/rashadashurov200201094/140529504-icono-de-foto-en-blanco.jpg?ver=6',
        }))
      )
    );
  }

  createProduct(product: {
    name: string;
    category: string;
    price: number;
    stock: number;
  }): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return this.http
      .post<any>('http://localhost:4000/api/products', product, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
