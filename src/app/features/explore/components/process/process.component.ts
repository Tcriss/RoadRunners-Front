import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {}