import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit, OnChanges {
  @Input() limit: any;
  @Input() isStarted = false;
  @Input() isResetted = false;
  @Input() resetFlag = false;
  @Output() pausedAt = new EventEmitter();
  @Output() resettedEmitter = new EventEmitter();
  pauseValues: string[] = [];
  intervalId = 0;
  constructor() {}
  timeLimitRecived: any;
  ngOnInit(): void {
    console.log('limit ecied', this.limit);
    this.timeLimitRecived = this.limit;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.timeLimitRecived = this.limit;
  }
  pause() {
    console.log('pause');
    this.clearTimer();
    const pauseValue = 'paused at' + this.limit;
    this.pauseValues.push(pauseValue);
    this.pausedAt.emit(this.pauseValues);
  }
  clearTimer() {
    clearInterval(this.intervalId);
  }
  start() {
    console.log('start');
    this.intervalId = window.setInterval(() => {
      this.limit -= 1;
      if (this.limit === 0) {
      } else {
        if (this.limit < 0) {
          this.limit = 0;
        }
      }
    }, 1000);
  }
  reset() {
    this.clearTimer();
    this.limit = 0;
    // if (this.resetFlag) {
    this.pauseValues = [];
    this.pausedAt.emit(this.pauseValues);
    // }
    console.log(this.limit);
    this.resettedEmitter.emit(true);
  }
}
