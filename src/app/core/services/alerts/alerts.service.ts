import { Injectable, Inject } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
    @Inject(TuiDialogService) private readonly dialog: TuiDialogService
  ) { }

  alertMe(title: string, description: string, buttons: {}): void {
    this.dialog.open(description, {
      label: title,
      size: 's',
      data: buttons,
    }).subscribe();
  }
}
