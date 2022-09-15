import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CharComponent } from './char/char.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { FormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent, //es una ruta del ejercicio anterior
    AboutComponent,
    CharComponent,
    AddCharacterComponent,
    CharactersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
