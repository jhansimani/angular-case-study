import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  @Input() limit = 0;

  intervalId!: number;
  pauseValues: string[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.timeLimit.subscribe((limit) => {
      this.limit = limit;
    });

    this.timerService.isStarted.subscribe((isStart: boolean) => {
      if (isStart) {
        this.intervalId = window.setInterval(() => {
          this.limit -= 1;
          if (this.limit === 0) {
            return;
          } else {
            if (this.limit < 0) {
              this.limit = 0;
              return;
            }
          }
        }, 1000);
      }
    });
    this.timerService.isPaused.subscribe((isPause: boolean) => {
      if (isPause) {
        this.Pauser();
      }
    });
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
  Pauser() {
    this.clearTimer();
    const pauseValue = 'paused at' + ' ' + this.limit;
    this.pauseValues.push(pauseValue);
    this.timerService.pausedAtEmitter.next(this.pauseValues);
  }
}
