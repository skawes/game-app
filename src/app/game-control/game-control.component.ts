import { Component, OnInit,EventEmitter ,Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() setTimeInterval=new EventEmitter<number>();
  numb=0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval=setInterval(()=>{
     this.setTimeInterval.emit(this.numb+1);
     this.numb++;

    },1000);
  }

  onPauseGame(){
    clearInterval(this.interval)
  }

}
