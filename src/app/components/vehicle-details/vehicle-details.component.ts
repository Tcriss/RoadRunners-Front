import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iapi } from 'src/app/shared/interfaces/api';
import { ApiService } from 'src/app/services/api/api.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Primary,
        size: 'l',
    })]
})
export class VehicleDetailsComponent implements OnInit {
  details:Iapi[];

  constructor(
    private route:ActivatedRoute,
    private data:ApiService,
    private alerts:AlertsService
    ){
      this.details = [];
    }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const id:string = String(params.get('id'));
    this.data.getVehicle(id).then(res =>{
      res.subscribe(data => {
        this.details = data;
        this.alerts.notification('tuiIconXCircleLarge','probando','texto');
      })
    }).catch(err => this.alerts.notification('tuiIconXCircleLarge','Error con los datos',err));
  }
}