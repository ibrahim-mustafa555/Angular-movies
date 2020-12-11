import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-viewed',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.scss']
})
export class ViewedComponent implements OnInit {

  public LikeMovie = [];
  config: any;
    constructor(private _MoviesService:MoviesService) {
  
      _MoviesService.getMostLike(1).subscribe( (data) => {
           this.LikeMovie = data.results;
      });
      this.config = {
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: 10000
      } ;
     }
  
     pageChanged(pageNumber){
      this.config.currentPage = pageNumber;
      this._MoviesService.getMostLike(pageNumber).subscribe((data: any) => {
            this.LikeMovie = data.results;
           }, error => {
               console.log("error");
          });
    }

  ngOnInit() {
  }

}
