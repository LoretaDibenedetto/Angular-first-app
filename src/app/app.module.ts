import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from './libro/libro.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { TitoloComponent } from './titolo/titolo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InserimentoLibroComponent } from './inserimento-libro/inserimento-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibreriaComponent,
    TitoloComponent,
    NavbarComponent,
    InserimentoLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
