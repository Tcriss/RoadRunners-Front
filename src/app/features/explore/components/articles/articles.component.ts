import { Component, EventEmitter, OnInit, Output, Input, AfterViewInit } from '@angular/core';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  @Input() articlesCount: number = 0;
  @Output() sendToParent = new EventEmitter<number>();
  isLoading = this.loader.loading;
  articles: Vehicle[] = [];
  articlesByBrand: Vehicle[] = [];

  constructor(
    private data: VehicleDataService,
    private loader: SpinnerService,
    private alerts: AlertsService
  ) {}

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.data.showVehicles().subscribe({
      next: (res) => {
        this.articles = res.slice(this.articlesCount);
        this.sendToParent.emit(this.articles.length);
      },
      error: (err) => this.alerts.notify('Error al traer articulos',err.message,'error'),
    });
  }

  toBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  getByBrand(brand: string) {
    this.data.getVehiclesByBrand(brand).subscribe({
      next: res => this.articlesByBrand = res,
      error: err => this.alerts.notify('Error al traer articulos',err.message,'error'),
    })
  }
}
