import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.view.html',
  styleUrls: ['./vehicles.view.scss']
})
export class VehiclesView implements OnInit {

  itemsLength!: number;
  params = new BehaviorSubject<Params>({});
  filteredParams: Params = {};

  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => this.params.next(params));
  }

  recieveArticles(event: number): void {
    let number: number = event;
    this.itemsLength = number;
  }

  handleParams(params: Params): void {
    this.params.next(params);
  }
}
