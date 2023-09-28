import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Api } from 'src/app/core/interfaces/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  articles: Api[] = [];

  constructor(private data: ApiService){}

  ngOnInit(): void {
    this.data.show().subscribe({
      next: res => this.articles = res,
      error: err => console.log(err)
    })
  }
}