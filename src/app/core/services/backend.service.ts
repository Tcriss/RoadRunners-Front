import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

import { EditVehicle, Vehicle } from '../interfaces';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = env.url + '/vehicles';

  constructor(private http: HttpClient) { }

  showVehicles(params?: Params): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url, {
      params: params,
    });
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url + '/' + id);
  }

  postVehicle(vehicle: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.url + '/create', vehicle);
  }

  putVehicle(id: string, vehicle: EditVehicle): Observable<string> {
    return this.http.put<string>(this.url + '/update/' + id, vehicle);
  }

  deleteVehicle(id: string): Observable<string> {
    return this.http.delete<string>(this.url + '/delete/' + id);
  }

  updateUser(uid: string | undefined, user: unknown): Observable<unknown> {
    return this.http.patch<unknown>(this.url + '/user/' + uid, user)
  }
}
