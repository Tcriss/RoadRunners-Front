import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { Brand } from '../../../../core/interfaces/brand';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Outline,
        size: 'm',
    }),
],
})
export class TypesComponent {
  
  types: Brand[] = [
    { 
      name: 'Sedán', 
      logoUrl: '../../../../assets/images/vehicle-type/sedan.png',
      link: '/explore/vehicles'
    },
    { 
      name: 'Jeepeta', 
      logoUrl: '../../../../assets/images/vehicle-type/SUV.png',
      link: '/explore/vehicles'
    },
    { 
      name: 'Camioneta', 
      logoUrl: '../../../../assets/images/vehicle-type/pick-up.png',
      link: '/explore/vehicles'
    },
    { 
      name: 'Sport', 
      logoUrl: '../../../../assets/images/vehicle-type/sport.png',
      link: '/explore/vehicles'
    },
    { 
      name: 'Camión', 
      logoUrl: '../../../../assets/images/vehicle-type/truck.jpg',
      link: '/explore/vehicles'
    }
  ]

}
