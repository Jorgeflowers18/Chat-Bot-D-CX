import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
// ...

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('myAnimationTrigger', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      // ...
      state(
        'closed',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'black',
        })
      ),
      transition('open => closed', [animate('4s 3s ease-out')]),
      transition('open => closed', [animate('4s 3s ease-out')])
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  myStatusExp = 'something';
  constructor() {}

  ngOnInit(): void {}

  get_sty(): void {}
}
