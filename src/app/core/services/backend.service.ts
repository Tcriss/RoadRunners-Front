import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = env.url;

  constructor(private http: HttpClient) {}

  showVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url );
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url+id);
  }

  getVehiclesByBrand(brand: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url+'brand/'+brand);
  }

  postVehicle(form: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.url+'insert', form);
  }

  updateUser(uid: string | undefined, user: unknown): Observable<unknown> {
    return this.http.patch<unknown>(`${this.url}user/${uid}`,user)
  }
}
