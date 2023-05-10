import { Injectable, Inject } from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiPushService} from '@taiga-ui/kit';
import {switchMap, take} from 'rxjs/operators';
import { tuiIconVideoLarge } from '@taiga-ui/icons';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    @Inject(TuiPushService) protected readonly push: TuiPushService,
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
  ) { }

  notification(icon:string,title:string, text:string){
    this.push.open(text, {
        heading: title,
        type: 'Notificacion',
        icon: icon,
        buttons: ['Roads?', '1.21 Gigawatts!?!'],
      }).pipe(
        take(1),
        switchMap(button => this.alert.open(button)),
    ).subscribe();
  }
}
