import { Component,OnInit } from '@angular/core';
/*importa router */
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

/* metti nel costruttore questo parametro*/
constructor( private router: Router){}

ngOnInit(): void {
  
}

/* funzione agganciata all'evento click del bottone in home component*/
goToAuthor(){
this.router.navigate(['/autori']);
}


}
