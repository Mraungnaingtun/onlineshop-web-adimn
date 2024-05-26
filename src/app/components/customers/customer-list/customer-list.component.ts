import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';
import { ListHeaderComponent } from '../../shared/reusable/list-header/list-header.component';
import { CustomerService } from '../../shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ListHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers: Customer[] = [];

  constructor(
    private _customerService: CustomerService,
  ) {
    
  }

  ngOnInit(): void {
   this.getList();
  }

  clearData(){
    this.customers = [];
  }

  getList(){
    this._customerService.getAllUsers().subscribe(data => {
      this.customers = data;
    });
  }

  editCustomer(id:number | undefined){

  }

  deleteCustomer(id:number | undefined){

  }
}
