import { Component, OnInit } from '@angular/core';
import { Iapi } from 'src/app/services/api/api';
import { ApiService } from 'src/app/services/api/api.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

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
