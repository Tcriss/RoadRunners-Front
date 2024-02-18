import { Component, EventEmitter, Output, Input, inject, DestroyRef, OnChanges, SimpleChanges, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Params } from '@angular/router';
import { BackendService } from '../../../../core/services/backend.service';
import { SpinnerService } from '../../../../core/services/spinner.service';
import { AlertsService } from '../../../../core/services/alerts.service';
import { Vehicle } from '../../../../core/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnChanges {

  @Input({ alias: 'filteredParams' }) params: Params = {};
  @Input() articlesCount: number = 0;
  @Output() sendToParent = new EventEmitter<number>();
  isLoading = this.loader.loading;
  articles: Vehicle[] = [];
  articlesByBrand: Vehicle[] = [];
  subcription!: Subscription;
  private destroyRef = inject(DestroyRef);

  constructor(
    private data: BackendService,
    private loader: SpinnerService,
    private alerts: AlertsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['params'].currentValue) {
      this.subcription = this.data.showVehicles(this.params)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (res) => {
            this.articles = res.slice(this.articlesCount);
            this.sendToParent.emit(this.articles.length);
          },
          error: (err) => {
            switch (err.status) {
              case 401:
                this.alerts.notify('Error al traer articulos', 'No estas autorizado', 'error');
                break;
              case 500:
                this.alerts.notify('Error al cargar articulos', 'Intentalo más tarde', 'error');
                break;
              default:
                this.alerts.notify('Error al traer articulos', `${err.status}: ${err.message}`, 'error')
                break;
            }
          },
        });
    }
    if (changes['params'].currentValue == undefined) {
      this.subcription = this.data.showVehicles()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (res) => {
            this.articles = res.slice(this.articlesCount);
            this.sendToParent.emit(this.articles.length);
          },
          error: (err) => {
            switch (err.status) {
              case 401:
                this.alerts.notify('Error al traer articulos', 'No estas autorizado', 'error');
                break;
              case 500:
                this.alerts.notify('Error al cargar articulos', 'Intentalo más tarde', 'error');
                break;
              default:
                this.alerts.notify('Error al traer articulos', `${err.status}: ${err.message}`, 'error')
                break;
            }
          },
        });
    }
  }

  toBase64(buffer: any): string {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  getByBrand(brand: string): void {
    this.data.getVehiclesByBrand(brand).subscribe({
      next: res => this.articlesByBrand = res,
      error: err => this.alerts.notify('Error al traer articulos', err.message, 'error'),
    })
  }
}
