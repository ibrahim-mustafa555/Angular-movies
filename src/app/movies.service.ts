import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _HttpClient:HttpClient ) {
    
   }


   getTrendingAll(pageNumber):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d4461d74270f2c9d98f6db01e02b2e9c&page=${pageNumber}`);
   }

  

  getTrendingMovie(pageNumber):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d4461d74270f2c9d98f6db01e02b2e9c&page=${pageNumber}`);
   }


   getTrendingTv(pageNumber):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=d4461d74270f2c9d98f6db01e02b2e9c&page=${pageNumber}`);
   }

   getMovieDetails(id):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d4461d74270f2c9d98f6db01e02b2e9c`)
   }
   
   getMovieRecomendations(idex):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${idex}/recommendations?api_key=d4461d74270f2c9d98f6db01e02b2e9c&language=en-US&page=1`)
   }

   getMoviesimilar(id):Observable<any> 
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=d4461d74270f2c9d98f6db01e02b2e9c&language=en-US&page=1`)
   }

  getMostPopular(pageNumber):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4461d74270f2c9d98f6db01e02b2e9c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }

  getMostLike(pageNumber):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4461d74270f2c9d98f6db01e02b2e9c&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
  
  getGener():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=d4461d74270f2c9d98f6db01e02b2e9c&language=en-US`)
  }
}
