import { Component, Input, OnInit,OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  constructor() { }

@Input() rateNumber?:number=0;

@Output() onRating:EventEmitter<number>=new EventEmitter<number>();


stars:number[]=[];

  ngOnInit() {

  }
selected=-1;
  ngOnChanges(changes: SimpleChanges): void {
    this.stars=[];
    if(this.rateNumber)
    for(var i=0;i<=this.rateNumber&&i<5;i++)
    {
     // this.stars=[...this.stars,i]
      this.stars.push(i);
  }
}

onHover(s:number){
  this.selected=s;
}

onrate(rate:number){
  debugger
  this.selected=rate;
this.onRating.emit(rate);
}

}
