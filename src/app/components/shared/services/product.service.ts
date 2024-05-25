import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    // Base URL with proper environment variable access
    private apiUrl = `${environment.apiBaseUrl}/products`;

    constructor(private http: HttpClient) { }

    // Fetches the list of products (improved error handling)
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl + '/all')
            .pipe(
                map(products => products),
                catchError(this.handleError)
            );
    }

    // Fetches a single product by ID (improved error handling)
    getProductById(id: number): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Product>(url)
            .pipe(
                map(product => product),
                catchError(this.handleError)
            );
    }

    // Creates a new product (improved error handling)
    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiUrl + '/create', product)
            .pipe(
                map(createdProduct => createdProduct),
                catchError(this.handleError)
            );
    }

    // Updates an existing product by ID (improved error handling)
    updateProduct(id: number, product: Product): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Product>(url, product)
            .pipe(
                map(updatedProduct => updatedProduct),
                catchError(this.handleError)
            );
    }

    // Deletes a product by ID (improved error handling)
    deleteProduct(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url)
            .pipe(
                map(() => null), // No response body on successful delete
                catchError(this.handleError)
            );
    }

    // Centralized error handling function (optional, but recommended)
    private handleError(error: any): Observable<any> {
        console.error('An error occurred:', error); // Log the error to the console
        return throwError('Something bad happened; please try again later.'); // Rethrow a user-friendly error
    }
}
