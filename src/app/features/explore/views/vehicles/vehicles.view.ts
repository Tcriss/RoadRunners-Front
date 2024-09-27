import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { LoaderService } from '../../../../services/loader.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.view.html',
  styleUrls: ['./vehicles.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesView implements OnInit {

  itemsLength!: number;
  private limit: number = 10;
  protected index: number = 0;
  public length!: number;
  params = new BehaviorSubject<Params>({});
  filteredParams: Params = {};
  isLoading: Subject<boolean> = this.loader.getStatus();

  constructor(private activeRoute: ActivatedRoute, private loader: LoaderService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.params.next({
        limit: this.limit,
        page: 1,
        ...params
      });
    });
  }

  recieveArticles(event: number): void {
    this.itemsLength = event;
    this.length = Math.ceil(this.itemsLength / this.limit);
  }

  handleParams(params: Params): void {
    this.params.next(params);
  }

  goToPage(index: number): void {
    this.params.next({ limit: this.limit, page: index + 1 });
  }
}
