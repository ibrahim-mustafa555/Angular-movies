import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  public popularMovie = [];
config: any;
  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getMostPopular(1).subscribe( (data) => {
         this.popularMovie = data.results;
    });
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: 10000
    } ;
   }

   pageChanged(pageNumber){
    this.config.currentPage = pageNumber;
    this._MoviesService.getMostPopular(pageNumber).subscribe((data: any) => {
          this.popularMovie = data.results;
         }, error => {
             console.log("error");
        });
  }

  ngOnInit() {
  }

}
