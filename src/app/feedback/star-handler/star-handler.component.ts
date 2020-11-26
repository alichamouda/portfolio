import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-handler',
  templateUrl: './star-handler.component.html',
  styleUrls: ['./star-handler.component.scss']
})
export class StarHandlerComponent implements OnInit {

  @Output()
  onStarCountChange = new EventEmitter();

  @Input()
  starCount = 5;

  constructor() { }

  ngOnInit(): void {
  }

  decreaseStars(){
    if (this.starCount > 0) {
      this.starCount = this.starCount -1;
    }
    this.onStarCountChange.emit(this.starCount);
  }

  increaseStars(){
    if (this.starCount <5) {
      this.starCount = this.starCount +1;
    }
    this.onStarCountChange.emit(this.starCount);
  }

  counter(number: number) {
    return new Array(number);
  }
}
