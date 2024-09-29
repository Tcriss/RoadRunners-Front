import { Injectable, Inject } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT } from '@taiga-ui/kit';

@Injectable({ providedIn: 'root' })
export class AlertsService {

  constructor(
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
    @Inject(TuiDialogService) private readonly dialog: TuiDialogService
  ) { }

  notify(title: string, description: string, icon: any) {
    this.alert.open(description, {
      label: title,
      status: icon,
    }).subscribe();
  }

  alertMe(title: string, description: string, button: string) {
    this.dialog.open(description, {
      label: title,
      size: 's',
      data: { button: button },
    }).subscribe();
  }

  askMe(title: string, description: string, confirmed: string, denied: string) {
    return this.dialog.open<boolean>(TUI_PROMPT, {
      label: title,
      size: 's',
      data: {
        content: description,
        yes: confirmed,
        no: denied,
      },
    })
  }
}