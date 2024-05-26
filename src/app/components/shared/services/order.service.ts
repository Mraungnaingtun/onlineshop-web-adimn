// src/app/services/order.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Order } from '../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    
    private apiUrl = `${environment.apiBaseUrl}/orders`;

    constructor(private http: HttpClient) {}

    createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/create`, order);
    }

    getOrderById(id: number): Observable<Order> {
        return this.http.post<Order>(`${this.apiUrl}/${id}`, {});
    }

    getAllOrders(): Observable<Order[]> {
        return this.http.post<Order[]>(`${this.apiUrl}/all`, {});
    }

    updateOrder(id: number, order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
    }

    deleteOrder(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
