import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../components/shared/models/product.model';
import { ProductService } from '../../../components/shared/services/product.service';
import { ListHeaderComponent } from '../../shared/reusable/list-header/list-header.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ListHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
  //for grid
  gridCols: number = 0;
  image:string = "../../../../assets/images/tShirt.jpg";

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    
  }

  ngDestroy(){
    this.clearData();
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: number | undefined): void {
    if (id !== undefined) {
      // this.productService.deleteProduct(id).subscribe(() => {
      //   this.products = this.products.filter(product => product.productId !== id);
      // });
    }
  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }

  clearData(){
    this.products = [];
  }

}
