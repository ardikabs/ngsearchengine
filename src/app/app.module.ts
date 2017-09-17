import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule ,JsonpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

import { SpotifyService} from './services/spotify.service';

const routes:Routes=[
  {path:"", component:SearchComponent},
  {path:"about",component:AboutComponent},
  {path:"artist/:id",component:ArtistComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), FormsModule, 
                  HttpModule, JsonpModule],
  declarations: [ AppComponent,
                  NavbarComponent,
                  AboutComponent,
                  SearchComponent,
                  ArtistComponent],
  providers: [SpotifyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
