import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.view.html',
  styleUrls: ['./vehicles.view.scss']
})
export class VehiclesView {

  itemsLength!: number;

  recieveArticles(event: number) {
    let number: number = event;
    this.itemsLength = number;
  }
}
