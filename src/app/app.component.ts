import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  

  title = 'shoppee';
  activeLink: string = '';
    navItems= [
      { itemId: 1, name: 'Dashboard', route: '/dashboard', selected: false },
      { itemId: 2, name: 'Products', route: '/products', selected: false },
      { itemId: 3, name: 'Add Product', route: '/add-product', selected: false },
      { itemId: 4, name: 'Orders', route: '/orders', selected: false },
      { itemId: 5, name: 'Customers', route: '/customer', selected: false },
    ]

    constructor(private cdr: ChangeDetectorRef) {}


    handleItemClick(item: any) {
      this.navItems.forEach((navItem: any) => navItem.selected = false);
      item.selected = true;
      this.cdr.detectChanges();
    }
  
}
