import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
constructor(private route: ActivatedRoute){

}
}
