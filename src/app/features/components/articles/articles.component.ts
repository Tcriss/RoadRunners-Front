import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/interfaces/api';
import { ApiService } from '../../../core/services/api/api.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

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
  isLoading = this.loader.loading;
  articles: Api[] = [];
  tag = 'Hello';

  constructor(
    private data:ApiService,
    private loader:SpinnerService
  ){}

  ngOnInit(): void {
    this.data.show().then(res =>{
      res.subscribe(data => this.articles = data)
    }).catch(err => console.log(err));
  }
}
