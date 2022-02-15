import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-time-limit',
  templateUrl: './time-limit.component.html',
  styleUrls: ['./time-limit.component.css'],
})
export class TimeLimitComponent implements OnInit {
  @Input() value: any;

  startCounter = 0;
  pauseCounter = 0;
  isStart = false;
  isPause = false;
  time = new Date();
  capturedTimeValues: any[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {}
  resetTimer() {
    this.value = '';
    this.startCounter = 0;
    this.pauseCounter = 0;
    this.capturedTimeValues = [];
    this.timerService.timeLimitEmitter.next(this.value);
    this.timerService.startCountEmitter.next(this.startCounter);
    this.timerService.pauseCountEmitter.next(this.pauseCounter);
    this.timerService.capturedTimes.next(this.capturedTimeValues);
  }
  onchange(event: any) {
    console.log(event.target.value);
    if (event.target.value != undefined || event.target.value != '') {
      this.value = parseInt(event.target.value);
      // this.limitValue.emit(this.value);
      this.timerService.timeLimitEmitter.next(this.value);
    }
  }
  startPause() {
    if (!this.isStart) {
      this.isStart = true;
      this.isPause = false;
      this.startCounter++;
      this.timerService.startCountEmitter.next(this.startCounter);
      this.timeCaptured(this.isStart);
      this.timerService.isStarted.next(this.isStart);
      this.timerService.isPaused.next(this.isPause);
    } else {
      this.isPause = true;
      this.isStart = false;
      this.pauseCounter++;
      this.timerService.pauseCountEmitter.next(this.pauseCounter);
      this.timeCaptured(this.isStart);
      this.timerService.isPaused.next(this.isPause);
      this.timerService.isStarted.next(this.isStart);
    }
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
    this.timerService.capturedTimes.next(this.capturedTimeValues);
  }
}
