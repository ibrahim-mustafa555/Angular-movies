import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recomendation-movies',
  templateUrl: './recomendation-movies.component.html',
  styleUrls: ['./recomendation-movies.component.scss']
})
export class RecomendationMoviesComponent implements OnInit {
  dataReco;
  movieId;
  imgPath = "https://image.tmdb.org/t/p/w500";
  constructor(public route:ActivatedRoute, public _MoviesService:MoviesService, private title:Title) { 
    this.title.setTitle("Recommendations");
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
   this.getMovieRecomendations();
  
    // console.log(this.movieId)
  }

  getMovieRecomendations(){
   return this._MoviesService.getMovieRecomendations(this.movieId ).subscribe(data => {
      this.dataReco = data.results;
      // console.log(this.dataReco)
    });
  }
  
}
