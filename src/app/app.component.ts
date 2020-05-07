import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-app';
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  startGame(numberEvent:number){
   if(numberEvent%2==0)
      this.evenNumbers.push(numberEvent);
      else
      this.oddNumbers.push(numberEvent)
    
  }
}
