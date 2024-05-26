// src/app/services/customer.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private apiUrl = `${environment.apiBaseUrl}/customers`;

    constructor(private http: HttpClient) {}

    getUser(id: number): Observable<Customer> {
        return this.http.get<Customer>(`${this.apiUrl}/${id}`);
    }

    createUser(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.apiUrl}/create`, customer);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getAllUsers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.apiUrl}/all`);
    }

    updateCustomer(id: number, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
    }
}
