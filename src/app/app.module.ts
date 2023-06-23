import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from './libro/libro.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { TitoloComponent } from './titolo/titolo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InserimentoLibroComponent } from './inserimento-libro/inserimento-libro.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BookComponent } from './pages/book/book.component';

/*percorsi applicazione*/
const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
},{
  path: 'autori',
  component: AuthorsComponent
},{
  path:'book',
  component: BookComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibreriaComponent,
    TitoloComponent,
    NavbarComponent,
    InserimentoLibroComponent,
    HomeComponent,
    AuthorsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
