import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapi } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string;

  constructor(public http:HttpClient) {
    this.url = 'https://roadrunners-backend.onrender.com/';
  }

  show():Observable<Iapi[]> {
    return this.http.get<Iapi[]>(this.url);
  }

  getVehicle(id:string):Observable<Iapi[]> {
    return this.http.get<Iapi[]>(this.url+id);
  }
}
