import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    categoryId: 0,
    brandId: 0,
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    console.log('Product submitted:', this.product);
    this.productService.createProduct(this.product).subscribe({
      next: createdProduct => {
        console.log('Product created:', createdProduct);
        this.goNew();
      },
      error: error => {
        console.error('Error creating product:', error);
      }
    });
  }

  goNew(){
    this.product = {
      name: '',
      description: '',
      price: 0,
      stockQuantity: 0,
      categoryId: 0,
      brandId: 0,
    };
  }
}
