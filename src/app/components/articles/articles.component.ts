import { Component, OnInit } from '@angular/core';
import { Iapi } from 'src/app/services/api/api';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles:Iapi[] = [];

  constructor(private data:ApiService){}

  ngOnInit(): void {
    this.data.show().subscribe(res => {
      this.articles = res;
    });
    console.log(this.articles);
  }
}
