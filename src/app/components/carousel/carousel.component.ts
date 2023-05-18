import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Iapi } from 'src/app/shared/interfaces/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  articles:Iapi[] = [];

  constructor(private data:ApiService){}

  ngOnInit(): void {
    this.data.show().then(res =>{
      res.subscribe(data => this.articles = data)
    }).catch(err => console.log(err));
    console.log(this.articles);
  }
}