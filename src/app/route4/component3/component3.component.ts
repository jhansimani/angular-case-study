import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
})
export class Component3Component implements OnInit, OnDestroy {
  timeStramps: any;
  timeStrampSubscription!: Subscription;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timeStrampSubscription = this.timerService.timeStramps.subscribe(
      (times: any) => {
        this.timeStramps = [...times];
      }
    );
  }
  ngOnDestroy(): void {
    this.timeStrampSubscription.unsubscribe();
  }
}
