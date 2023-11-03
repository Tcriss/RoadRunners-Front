import { Component, EventEmitter, OnInit, Output, Input, AfterViewInit } from '@angular/core';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Secondary,
        size: 'm',
    })]
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  @Input() articlesCount: number = 0;
  @Output() sendToParent = new EventEmitter<number>();
  isLoading = this.loader.loading;
  articles: Vehicle[] = [];
  articlesByBrand: Vehicle[] = [];

  constructor(
    private data: VehicleDataService,
    private loader: SpinnerService
  ) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.data.showVehicles().subscribe({
      next: res => {
        this.articles = res.slice(this.articlesCount);
        this.sendToParent.emit(this.articles.length);
      },
      error: err => console.log(err)
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
      next: res => {
        this.articlesByBrand = res
      },
      error: err => console.log(err)
    })
  }
}
