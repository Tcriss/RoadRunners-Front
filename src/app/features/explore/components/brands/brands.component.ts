import { Component } from '@angular/core';
import { Brand } from '../../../../core/interfaces/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
 
    brands: Brand[] = [
        { 
          name: 'Hyundai', 
          logoUrl: '../../../../assets/images/brands-logo/hyundai-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Toyota', 
          logoUrl: '../../../../assets/images/brands-logo/toyota-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Tesla', 
          logoUrl: '../../../../assets/images/brands-logo/tesla-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Mercedes', 
          logoUrl: '../../../../assets/images/brands-logo/mercedes-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Ford', 
          logoUrl: '../../../../assets/images/brands-logo/ford-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Honda', 
          logoUrl: '../../../../assets/images/brands-logo/honda-logo.png',
          link: '/explore/vehicles'
        },
        { 
          name: 'Audi', 
          logoUrl: '../../../../assets/images/brands-logo/audi-logo.png',
          link: '/explore/vehicles'
        }
    ];
}
