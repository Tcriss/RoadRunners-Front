import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iapi } from 'src/app/services/api/api';
import { ApiService } from 'src/app/services/api/api.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

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
    private data:ApiService
    ){
      this.details = [];
    }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const id:string = String(params.get('id'));
    this.data.getVehicle(id).then(res =>{
      res.subscribe(data => this.details = data)
    }).catch(err => console.log(err));
  }
}
