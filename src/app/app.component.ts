import { Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

import { Link } from './core/interfaces';
import { FooterComponent } from './common/components/footer/footer.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { LoadingScreenComponent } from './common/components/loading-screen/loading-screen.component';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterModule,
    TuiRootModule,
    LoadingScreenComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
