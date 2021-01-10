import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'To-Do List';

  constructor(){
    // this.title = 'red';
    this.changeName("method");
  }

  changeName(name:string){
    this.title = name;
  }
}
