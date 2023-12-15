import { Injectable, Inject } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
import { switchMap } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
    @Inject(TuiDialogService) private readonly dialog: TuiDialogService
  ) { }

  notify(title: string, description: string, icon: any) {
    swal.fire({
      toast: true,
      icon: icon,
      title: title,
      text: description,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      }
    });
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