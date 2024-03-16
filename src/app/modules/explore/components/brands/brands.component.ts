import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Brand } from '../../../../common/interfaces';
import { brands } from '../../../../common/utils/brands.list';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsComponent {
 
    brands: Brand[] = brands;
}
