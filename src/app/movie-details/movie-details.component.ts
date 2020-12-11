import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

public movieId;
public trendingAll ;
public dataReco ;
public dataDetails:any = [];
  constructor( public route:ActivatedRoute, public _MoviesService:MoviesService ) {
    // _MoviesService.getTrendingAll(3).subscribe( (data) => {
      
    //   this.trendingAll = data.results;
    // })
   }

  ngOnInit() {
  
   this.movieId = this.route.snapshot.params['id'];
   this.getMovieDetailes();
  
    // console.log(this.movieId)
  }

  getMovieDetailes(){
    this._MoviesService.getMovieDetails(this.movieId ).subscribe(data => {
      this.dataDetails = data;
      // console.log(this.dataDetails)
    })

  }

  

}
