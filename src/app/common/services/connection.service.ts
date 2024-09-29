import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

import { EditVehicle, Vehicle } from '../../core/interfaces';
import { environment as env } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConnectionService {

  private readonly url: string = env.url + '/vehicles/';

  constructor(private http: HttpClient) { }

  findAllVehicles(params?: Params): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url, { params: params });
  }

  findOneVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url + id);
  }

  createVehicle(vehicle: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.url + 'create', vehicle);
  }

  editVehicle(id: string, vehicle: EditVehicle): Observable<string> {
    return this.http.put<string>(this.url + 'edit/' + id, vehicle);
  }

  deleteVehicle(id: string): Observable<string> {
    return this.http.delete<string>(this.url + 'delete/' + id);
  }

  updateUser(uid: string | undefined, user: unknown): Observable<unknown> {
    return this.http.patch<unknown>(env.url + '/users/' + uid, user);
  }
}
