import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CountDownTimerComponent } from '../count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnChanges {
  timerForm: any;
  @Input() value: any;
  @Output() limitValue = new EventEmitter();
  @Output() isStarted = new EventEmitter();
  @Output() isResetted = new EventEmitter();
  @Output() noOfStarts = new EventEmitter();
  @Output() noOfPauses = new EventEmitter();
  @Output() capturedTimes = new EventEmitter();

  @Input() reset = false;
  @Input() pauseValues: any;
  @ViewChild('timer') private CountDownTimerComponent!: CountDownTimerComponent;

  isStart = false;
  isReset = false;
  time = new Date();
  capturedTimeValues: any[] = [];

  startCounter = 0;
  pauseCounter = 0;

  constructor() {}

  ngOnInit(): void {}
  onchange(event: any) {
    console.log(event.target.value);
    if (event.target.value != undefined || event.target.value != '') {
      this.value = parseInt(event.target.value);
      this.limitValue.emit(this.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ng on changes');
  }

  startPause() {
    if (!this.isStart) {
      this.isStart = true;
      this.isReset = false;
      this.startCounter++;
      this.timeCaptured(this.isStart);
      this.noOfStarts.emit(this.startCounter);
      // this.CountDownTimerComponent.start();
    } else {
      this.isStart = false;
      this.isReset = false;
      this.pauseCounter++;
      this.noOfPauses.emit(this.pauseCounter);
      this.timeCaptured(this.isStart);
      // this.CountDownTimerComponent.pause();
    }
    this.isStarted.emit(this.isStart);
  }
  resetTimer() {
    this.isStart = false;
    this.isReset = true;
    this.capturedTimeValues = [];
    this.startCounter = 0;
    this.pauseCounter = 0;
    this.value = '';
    // this.CountDownTimerComponent.reset();
    this.isResetted.emit(this.isReset);
    this.capturedTimes.emit(this.capturedTimeValues);
    this.noOfStarts.emit(this.startCounter);
    this.noOfPauses.emit(this.pauseCounter);
    // this.limitValue.emit(this.value);
  }
  timeCaptured(startFlag: boolean) {
    this.time = new Date();
    let key = '';
    if (startFlag) {
      key = 'start';
    } else {
      key = 'start';
    }
    const timeObj = { start: startFlag, time: this.time };
    this.capturedTimeValues.push(timeObj);
    console.log(this.capturedTimeValues);
    this.capturedTimes.emit(this.capturedTimeValues);
  }
}
