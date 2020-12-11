import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  movieId: any;
  dataSimilar: any;

  constructor(public route:ActivatedRoute, public _MoviesService:MoviesService, private title:Title ) { 
    this.title.setTitle("Similar");
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
   this.getMoviesimilar();
  }

  getMoviesimilar(){
    return this._MoviesService.getMoviesimilar(this.movieId).subscribe ( data => this.dataSimilar = data.results )
  }
}
