import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapi } from '../../shared/interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string;

  constructor(public http:HttpClient) {
    this.url = 'https://roadrunners-backend.onrender.com/';
  }

  async show():Promise<Observable<Iapi[]>> {
    return this.http.get<Iapi[]>(this.url);
  }

  async getVehicle(id:string):Promise<Observable<Iapi[]>> {
    return this.http.get<Iapi[]>(this.url+id);
  }

  postVehicle(form: {}):Observable<{}>{
    return this.http.post(this.url+'insert', form);
  }
}
