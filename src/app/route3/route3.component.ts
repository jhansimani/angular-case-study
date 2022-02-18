import { Component, OnInit, ViewChild } from '@angular/core';
import { Component1Component } from './component1/component1.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css'],
})
export class Route3Component implements OnInit {
  @ViewChild('timer')
  private component1Cmp!: Component1Component;
  timeLimit = 0;
  isStarted!: boolean;
  pauseValues: any;
  resetted = false;
  pauseCount = 0;
  startCount = 0;
  capturedValues!: any[];
  constructor() {}

  ngOnInit(): void {}
  limitValue(timeLimit: any) {
    this.timeLimit = timeLimit;
  }
  isStart(event: any) {
    this.isStarted = event;
    if (this.isStarted) {
      this.component1Cmp.start();
    } else {
      this.component1Cmp.pause();
    }
  }
  pausedAt(event: any) {
    this.pauseValues = [...event];
  }
  reset(event: any) {
    this.resetted = event;
    this.component1Cmp.reset();
  }
  noOfPauses(event: any) {
    this.pauseCount = event;
  }
  startCounter(event: any) {
    this.startCount = event;
  }
  capturedTimeValues(event: any) {
    this.capturedValues = [...event];
  }
}
