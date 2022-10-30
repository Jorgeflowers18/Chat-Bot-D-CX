import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-calls',
  templateUrl: './speech-calls.component.html',
  styleUrls: ['./speech-calls.component.scss']
})
export class SpeechCallsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Funciona el oninit')
  }

}
