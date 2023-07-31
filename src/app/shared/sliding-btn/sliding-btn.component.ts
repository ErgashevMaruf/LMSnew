import { Component } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sliding-btn',
  templateUrl: './sliding-btn.component.html',
  styleUrls: ['./sliding-btn.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('sliding', [
      state('default', style({ transform: 'translateX(0)' })),
      state('rotated', style({ transform: 'translateX(150%)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})
export class SlidingBtnComponent {
  slide = 'default';
  slideBtn() {
    console.log("work");

    this.slide = (this.slide === 'default' ? 'rotated' : 'default');
  }
}
