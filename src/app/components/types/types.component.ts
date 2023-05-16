import { Component } from '@angular/core';
import { Type } from 'src/assets/brands';
import {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';

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
  types:Array<Type> = [
    { 
      name: 'Sedán', 
      logo: '../../../assets/images/sedan.png',
      link: ''
    },
    { 
      name: 'Jepeeta', 
      logo: '../../../assets/images/SUV.png',
      link: ''
    },
    { 
      name: 'Camioneta', 
      logo: '../../../assets/images/pick-up.png',
      link: ''
    },
    { 
      name: 'Sport', 
      logo: '../../../assets/images/sport.png',
      link: ''
    },
    { 
      name: 'Camión', 
      logo: '../../../assets/images/truck.jpg',
      link: ''
    }
  ]

}
