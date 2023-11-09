import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  isLoading$ = this.loader.getStatus();

  constructor(private loader: SpinnerService) {}
}
