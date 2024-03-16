import { Component, EventEmitter, Output, Input, inject, DestroyRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
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
  subcription!: Subscription;
  private destroyRef = inject(DestroyRef);

  constructor(
    private data: BackendService,
    private loader: SpinnerService,
    private alerts: AlertsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['params'].currentValue) this.getVehiclesBy();
    if (!changes['params'].currentValue) this.getVehicles();
  }

  private getVehicles(): void {
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
          };
        }
      });
  }

  private getVehiclesBy(): void {
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
          };
        },
      });
  }
}
