import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss']
})
export class VehiclesPage {

  itemsLength!: number;

  recieveArticles(event: number) {
    let number: number = event;
    this.itemsLength = number;
  }
}
