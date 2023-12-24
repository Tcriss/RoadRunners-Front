import { Component } from '@angular/core';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { Brand } from '../../../../core/interfaces/brand';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
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
      link: ''
    },
    { 
      name: 'Jepeeta', 
      logoUrl: '../../../../assets/images/vehicle-type/SUV.png',
      link: ''
    },
    { 
      name: 'Camioneta', 
      logoUrl: '../../../../assets/images/vehicle-type/pick-up.png',
      link: ''
    },
    { 
      name: 'Sport', 
      logoUrl: '../../../../assets/images/vehicle-type/sport.png',
      link: ''
    },
    { 
      name: 'Camión', 
      logoUrl: '../../../../assets/images/vehicle-type/truck.jpg',
      link: ''
    }
  ]

}
