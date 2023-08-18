import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api/api.service';
import { Api } from 'src/app/core/interfaces/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  articles: Api[] = [];
  index = 2;
  screenVW = screen.width;
  count = 0;

  constructor(private data:ApiService){
    this.responsive();
  }

  ngOnInit(): void {
    this.data.show().then(res =>{
      res.subscribe(data => this.articles = data)
    }).catch(err => console.log(err));
  }

  responsive(){
    if(this.screenVW < 440){
      this.count = 1;
    }else if(this.screenVW > 440 && this.screenVW < 650){
      this.count = 2;
    }else if(this.screenVW > 650){
      this.count = 3;
    }
    return this.count;
  }
}