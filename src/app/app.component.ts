import { Component, NgZone, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
//import { VoiceRecognitionService } from './service/voice-recognition.service';



declare const annyang: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [  ]
})
export class AppComponent {
  title = 'chat-gui';
  constructor(){}
  
}