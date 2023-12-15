import { Component, EventEmitter, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { BackendService } from 'src/app/core/services/backend.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {

  @Input() articlesCount: number = 0;
  @Output() sendToParent = new EventEmitter<number>();
  isLoading = this.loader.loading;
  articles: Vehicle[] = [];
  articlesByBrand: Vehicle[] = [];
  subcription!: Subscription;

  constructor(
    private data: BackendService,
    private loader: SpinnerService,
    private alerts: AlertsService
  ) { }

  ngOnInit(): void {
    this.subcription = this.data.showVehicles().subscribe({
      next: (res) => {
        this.articles = res.slice(this.articlesCount);
        this.sendToParent.emit(this.articles.length);
      },
      error: (err) => {
        switch (err.status) {
          case 401:
            this.alerts.notify('Error al traer articulos', 'No estas autorizado', 'error');
            break;
          default:
            this.alerts.notify('Error al traer articulos', `${err.status}: ${err.message}`, 'error')
            break;
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe;
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
      error: err => this.alerts.notify('Error al traer articulos', err.message, 'error'),
    })
  }
}
