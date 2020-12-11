import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeeMorePipe } from './see-more.pipe';
import { RecomendationMoviesComponent } from './recomendation-movies/recomendation-movies.component';
import { SimilarComponent } from './similar/similar.component';
import { PopularComponent } from './popular/popular.component';
import { ViewedComponent } from './viewed/viewed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    MoviesComponent,
    TvComponent,
    ContactsComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    SeeMorePipe,
    JwPaginationComponent,
    RecomendationMoviesComponent,
    SimilarComponent,
    PopularComponent,
    ViewedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
