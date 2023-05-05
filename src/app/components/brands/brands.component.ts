import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
    index = 0;
 
    brands:Array<{name:string,logo:string}> = [
        { name: 'Hyundai', logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistcarbrands.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fhyundai-logo-white.jpg&f=1&nofb=1&ipt=17faf25a642de95b4c1f3f288e41b20678896d6470fc8aab59dcee24b6ecd6fe&ipo=images' },
        { name: 'Toyota', logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-9sHkyGUf6fU%2FUCmrmIZQ45I%2FAAAAAAAABJk%2FWXGieaHpyhg%2Fs1600%2FToyota-Logo%2B(1).jpg&f=1&nofb=1&ipt=d88a44d9f2e680090e7c780d0e046c68f7d2b1720d34521818caa43aafa81717&ipo=images' },
        { name: 'Tesla', logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Ftesla_logo%2Ftesla_logo_PNG19.png&f=1&nofb=1&ipt=83e0ebf994ef2f0c500a3a0814a9027170b0e555faa4ffb6bc83e3ce390bbee1&ipo=images' },
        { name: 'Audi', logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftous-logos.com%2Fwp-content%2Fuploads%2F2017%2F08%2FLogo-Audi.png&f=1&nofb=1&ipt=ef4e3503494073691e1ffccc0542d2a2ec3bb47af7180f7472bdb5240a35a409&ipo=images' },
        { name: 'Mercedes', logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fmercedes%2Fmercedes_PNG80145.png&f=1&nofb=1&ipt=63893c0d422403c7fb61a2a2deb9a34b12a471edfc94b14603c5af986fad0d5e&ipo=images' },
    ];
}
