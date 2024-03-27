import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Brand } from '../../../../core/interfaces';
import { brands } from '../../../../core/utils/brands.list';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsComponent {
 
    brands: Brand[] = brands;
}
