import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './account.view.html',
  styleUrls: ['./account.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountView {}
