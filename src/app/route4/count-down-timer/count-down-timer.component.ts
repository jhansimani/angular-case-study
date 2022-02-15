import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit, OnChanges {
  @Input() limit: any;
  start = false;
  pause = false;
  intervalId!: number;
  pauseValues: string[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.timeLimitEmitter.subscribe((limit) => {
      this.limit = limit;
    });

    this.timerService.isStarted.subscribe((isStart: boolean) => {
      this.start = isStart;
      console.log('start status', isStart);
    });
    this.timerService.isPaused.subscribe((isPause: boolean) => {
      this.pause = isPause;
    });
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.start) {
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
    if (this.pause) {
      this.clearTimer();
      const pauseValue = 'paused at' + this.limit;
      this.pauseValues.push(pauseValue);
      this.timerService.pausedAtEmitter.next(this.pauseValues);
    }
  }
}
