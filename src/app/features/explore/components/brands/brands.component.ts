import { Component } from '@angular/core';
import { Brand } from 'src/app/core/interfaces/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
 
    brands: Brand[] = [
        { 
          name: 'Hyundai', 
          logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistcarbrands.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fhyundai-logo-white.jpg&f=1&nofb=1&ipt=17faf25a642de95b4c1f3f288e41b20678896d6470fc8aab59dcee24b6ecd6fe&ipo=images',
          link: 'hyundai'
        },
        { 
          name: 'Toyota', 
          logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-9sHkyGUf6fU%2FUCmrmIZQ45I%2FAAAAAAAABJk%2FWXGieaHpyhg%2Fs1600%2FToyota-Logo%2B(1).jpg&f=1&nofb=1&ipt=d88a44d9f2e680090e7c780d0e046c68f7d2b1720d34521818caa43aafa81717&ipo=images',
          link: 'toyota'
        },
        { 
          name: 'Tesla', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
          link: 'tesla'
        },
        { 
          name: 'Mercedes', 
          logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fmercedes%2Fmercedes_PNG80145.png&f=1&nofb=1&ipt=63893c0d422403c7fb61a2a2deb9a34b12a471edfc94b14603c5af986fad0d5e&ipo=images',
          link: 'mercedes'
        },
        { 
          name: 'Ford', 
          logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.carlogos.org%2Flogo%2FFord-logo-1929-1440x900.png&f=1&nofb=1&ipt=f1bafdd8ca39f8f30153dc8e0fea39f1f71e3304fb02f2825999157e9b9f1605&ipo=images',
          link: 'ford'
        }
    ];
}