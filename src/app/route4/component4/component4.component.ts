import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit, OnDestroy {
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private timerService: TimerService) {}
  startCountSubscription!: Subscription;
  pauseCountSubscription!: Subscription;
  ngOnInit(): void {
    this.startCountSubscription = this.timerService.startCountEmitter.subscribe(
      (count) => {
        this.startCount = count;
      }
    );
    this.pauseCountSubscription = this.timerService.pauseCountEmitter.subscribe(
      (count) => {
        this.pauseCount = count;
      }
    );
  }
  ngOnDestroy(): void {
    this.startCountSubscription.unsubscribe();
    this.pauseCountSubscription.unsubscribe();
  }
}
