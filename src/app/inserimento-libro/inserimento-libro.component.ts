import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento-libro',
  templateUrl: './inserimento-libro.component.html',
  styleUrls: ['./inserimento-libro.component.css']
})
export class InserimentoLibroComponent implements OnInit {

  //riceve in input delle stringhe
  @Output()bookAdded = new EventEmitter<{title:string, author:string, price:number}>();

  inputTitle: string ="";
  inputAuthor: string ="";
  inputPrice: string = "";


  ngOnInit(): void {
    
  }
  //butta fuori da qua
  onAddBook(){
    const book = {
      title:this.inputTitle,
      author:this.inputAuthor,
      price:+this.inputPrice
    }
    this.bookAdded.emit(book);
  }
  
}
