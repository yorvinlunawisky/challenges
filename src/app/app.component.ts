import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  bgColor: string = 'grey';

  changeColor() {
    this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

}
