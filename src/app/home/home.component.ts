import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

trendingAll:[]=[] ;
config: any;
pages;
items
term

hideSearch = false;

constructor(private _MoviesService:MoviesService, private route: ActivatedRoute,  private router: Router, private title:Title) {
  _MoviesService.getTrendingAll(1).subscribe((data) => { this.trendingAll = data.results;
    this.pages = data.total_results;
        //  console.log(this.pages);
     });

     //For Pagination
  this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: 20000
    } ;

    // Set Title
    this.title.setTitle("Trending All Movies And TV")
}

pageChanged(pageNumber){
  this.config.currentPage = pageNumber;
  this._MoviesService.getTrendingAll(pageNumber)
      .subscribe((data: any) => {
        this.trendingAll = data.results;
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
