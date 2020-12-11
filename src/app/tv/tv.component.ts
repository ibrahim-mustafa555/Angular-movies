import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

public trendingTv = [];
mediaType = true;
config: any;
term
hideSearch = false;

  constructor(private _MoviesService:MoviesService, private title:Title) {

    _MoviesService.getTrendingTv(1).subscribe( (data) => {
      
      this.trendingTv = data.results;
    });
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: 20000
    } ;

    this.title.setTitle("Trending All TV");
   }

   pageChanged(pageNumber){
    this.config.currentPage = pageNumber;
    this._MoviesService.getTrendingAll(pageNumber)
        .subscribe((data: any) => {
          this.trendingTv = data.results;
              }, error => {
                console.log("error");
        });
  }

  appearSearch()
  {
    return this.hideSearch =! this.hideSearch;
  }

  ngOnInit() {
  }

}
