import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  
  loading: Subject<boolean> = new Subject<boolean>();

  show():void{
    this.loading.next(false);
  }

  hide():void{
    this.loading.next(true);
  }

  getStatus() {
    return this.loading;
  }
}
