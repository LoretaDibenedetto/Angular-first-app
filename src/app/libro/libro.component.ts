import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls:['./libro.component.css']
})
export class LibroComponent {
inputString = '';

//accessibile dall'esterno
@Input() book: {title: string, author: string, price:number} ={
    title:'',
    author:'',
    price: 0
};



}