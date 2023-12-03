import { Injectable, Inject } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
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

  alertMe(title: string, description: string, buttons: {}): void {
    this.dialog.open(description, {
      label: title,
      size: 's',
      data: buttons,
    }).subscribe();
  }
}
