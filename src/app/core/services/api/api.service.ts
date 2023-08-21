import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string;

  constructor(public http:HttpClient) {
    this.url = 'https://roadrunners-backend.onrender.com/';
  }

  async show(): Promise<Observable<Api[]>> {
    return await this.http.get<Api[]>(this.url);
  }

  async getVehicle(id:string): Promise<Observable<Api>> {
    return await this.http.get<Api>(this.url+id);
  }

  postVehicle(form: {}):Observable<{}>{
    return this.http.post(this.url+'insert', form);
  }
}