import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapi } from './api';
import { iForm } from 'src/app/components/sell-form/form';

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

  async postVehicle(form: {}):Promise<Observable<{}>>{
    return this.http.post(this.url+'/insert', form);
  }
}
