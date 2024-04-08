import { Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Link } from './core/interfaces';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

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