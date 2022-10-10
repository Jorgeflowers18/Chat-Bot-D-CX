import { Component, NgZone, OnInit} from '@angular/core';
//import { VoiceRecognitionService } from './service/voice-recognition.service';

declare const annyang: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'chat-gui';

}