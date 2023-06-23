import { Component } from '@angular/core';
import{Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

/**
 *
 */
constructor(private router:Router, private route: ActivatedRoute) {

  
}


reload(){
  this.router.navigate(['/autori']);
}

}
