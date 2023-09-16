import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../interfaces/api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment.url;
  key: string = environment.key;
  headers: HttpHeaders = new HttpHeaders().set('API_KEY', this.key);

  constructor(private http: HttpClient) {}

  show(): Observable<Api[]> {
    return this.http.get<Api[]>(this.url, { headers: this.headers } );
  }

  getVehicle(id: string): Observable<Api> {
    return this.http.get<Api>(this.url+id, { headers: this.headers });
  }

  getVehiclesByBrand(brand: string): Observable<Api[]> {
    return this.http.get<Api[]>(this.url+'brand/'+brand, { headers: this.headers });
  }

  postVehicle(form: {}):Observable<{}>{
    return this.http.post(this.url+'insert', form, { headers: this.headers });
  }
}
