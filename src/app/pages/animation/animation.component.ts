import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
// ...

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '66px',
        height: '33px',
        
        //border-radius: '0 0 25px 25px',
        background: 'white',
        position: 'relative',
        // top: '10px',
        bottom: '10px',
        left: '60px',
        margin_left: '-13px',
        animation: 'reverse 1s 0.2s 1s',
        /*//-webkit-animation: grow 3s 1s 1 ease;
        //-webkit-animation-fill-mode: forwards;
        //-webkit-transform: scale(0);
        transform: 'scale(0)',*/
      })),
      state('closed', style({
        width: '20px',
        height: '40px',
        //bottom: '1px',
        //border-radius: '0 0 25px 25px',
        background: 'white',
        position: 'relative',
        top: '70px',
        left: '100px',
        margin_left: '-13px',
        animation: 'reverse 1s 0.3s 1s',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimationComponent implements OnInit {
  // myStatusExp = 'something';
  isOpen = true;
  // isClosed = true;  
  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}

  get_sty(): void {}
}
