import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

public trendingMovie = [];
config: any;
hideSearch = false;
term

  constructor(private _MoviesService:MoviesService, private title:Title) {

    _MoviesService.getTrendingMovie(1).subscribe( (data) => {
         this.trendingMovie = data.results;
    });
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: 20000
    } ;

    this.title.setTitle("Trending All Movies")

   }

   pageChanged(pageNumber){
    this.config.currentPage = pageNumber;
    this._MoviesService.getTrendingMovie(pageNumber).subscribe((data: any) => {
          this.trendingMovie = data.results;
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
