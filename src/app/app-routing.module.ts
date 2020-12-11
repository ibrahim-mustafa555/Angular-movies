import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecomendationMoviesComponent } from './recomendation-movies/recomendation-movies.component';
import { SimilarComponent } from './similar/similar.component';
import { PopularComponent } from './popular/popular.component';
import { ViewedComponent } from './viewed/viewed.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'movieDetailes/:id', component:MovieDetailsComponent},
  {path:'about', component:AboutComponent},
  {path:'movies', component:MoviesComponent},
  {path:'tv', component:TvComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'mostPopular', component:PopularComponent},
  {path:'mostViewed', component:ViewedComponent},
  {path:'recomendation/:id', component:RecomendationMoviesComponent},
  {path:'similar/:id', component:SimilarComponent},
  {path:'reviews', loadChildren:'./reviews/reviews.module#ReviewsModule'},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
