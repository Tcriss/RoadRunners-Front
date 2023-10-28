import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {
  
  url: string = environment.url;
  key: string = environment.key;
  headers: HttpHeaders = new HttpHeaders().set('API_KEY', this.key);

  constructor(private http: HttpClient) {}

  showVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url, { headers: this.headers } );
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url+id, { headers: this.headers });
  }

  getVehiclesByBrand(brand: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url+'brand/'+brand, { headers: this.headers });
  }

  postVehicle(form: {}):Observable<{}>{
    return this.http.post(this.url+'insert', form, { headers: this.headers });
  }
}
