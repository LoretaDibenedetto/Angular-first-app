import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  
  books:{title:string, author:string,price:number}[]= [];
 /* 
  inputTitle: string ="";
  inputAuthor: string ="";
  inputPrice: string = "";*/

/**
 *
 */
constructor() {}


ngOnInit(): void{

}


/*onAddBook(){
  const book = {
    title:this.inputTitle,
    author:this.inputAuthor,
    price:+this.inputPrice
  }
  this.books.push(book);
  console.log(this.books);
}*/

onBookAdded(book:{title:string, author:string, price: number}){
  console.log(book);
  this.books.push(book);

}


}
