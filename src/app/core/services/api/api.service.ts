import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../interfaces/api';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url;
  }

  show(): Observable<Api[]> {
    return this.http.get<Api[]>(this.url);
  }

  getVehicle(id: string): Observable<Api> {
    return this.http.get<Api>(this.url+id);
  }

  getVehiclesByBrand(brand: string): Observable<Api[]> {
    return this.http.get<Api[]>(this.url+'brand/'+brand);
  }

  postVehicle(form: {}):Observable<{}>{
    return this.http.post(this.url+'insert', form);
  }
}
