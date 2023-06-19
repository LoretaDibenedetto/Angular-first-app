import {Component } from "@angular/core";
@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

    onKeyUp(event: Event){
        console.log('onKeyUp event', (<HTMLInputElement>event.target).value);
    }
}