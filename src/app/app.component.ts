import { Component, NgZone, OnInit, } from '@angular/core';
// import { Configuration, OpenAIApi } from 'openai';
import { TimerCmpComponent } from './components/timer-cmp/timer-cmp.component';
//import {BotApi} from '../assets/js/testVoice';
import { ApiDcxService } from './services/api-dcx.service';

import { Configuration, OpenAIApi } from 'openai';
import * as say from 'say';



declare var annyang: any;
declare var formComponent: TimerCmpComponent;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(public apiService: ApiDcxService) {
	
  }

  configuration = new Configuration({
        apiKey: "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",
    });

	openai = new OpenAIApi(this.configuration);

  ngOnInit(){

	this.apiRequest();
	
	this.initializeVoiceRecognitionCallback();

  }

  async tellSomething(){
	//say.speak('Hola UTPL', 'Alex', 0.5);
  }

  async apiRequest(){
	const request = {
		model: 'text-davinci-003',
		prompt: 'Hola, que haces?',
		max_tokens: 300,
		temperature: 0.5,
		frequency_penalty: 0.0,
		presence_penalty: 0.0
	  };
      const response = await this.openai.createCompletion(request); 
      console.log(response['data']['choices'][0]['text']);

	  const chain = response['data']['choices'][0]['text'];

	  //say.speak('Hola amigos', 'Alex', 0.5);
  }

  initializeVoiceRecognitionCallback(): void {
	// let ss = new BotApi('Chat');

	annyang.setLanguage("es-EC");
    annyang.start();
	annyang.addCallback('resultMatch', (frases: any) => {
		annyang.pause();
		console.log(frases);
		// let status_annyang = ss.waitBot(1);
		// if (status_annyang == 200) {
		// 	console.log('Reiniciando servicio.');
		// 	console.log('Código:' + status_annyang);
		// 	annyang.start();
		// }
      //loguearVozDetectada(`<strong>Probablemente has dicho: </strong> <br> ${frases.join("<br>")}`);
    });
	let comandos ={
		
		"modo de entrenamiento":()=> {
			annyang.pause();
			setTimeout(function(){
				console.log("Voice recognition pause...");
			}, 20000);
			console.log("Reconocido");
			annyang.start();
        },
	}
	annyang.addCommands(comandos);
    annyang.addCallback('error', function () {
      //$('.myErrorText').text('There was an error!');
    });
  }
  /*
  initializeVoiceRecognitionCallback(): void {
		annyang.addCallback('error', (err: { error: any; }) => {
      if(err.error === 'network'){
        this.voiceText = "Internet is require";
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('soundstart', (res: any) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
		});

		annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('result', (userSaid: any[]) => {
			this.ngZone.run(() => this.voiceActiveSectionError = false);

			let queryText: any = userSaid[0];

			annyang.abort();

      this.voiceText = queryText;

			this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
		});
	}

	startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;

		if (annyang) {
			let commands = {
				'demo-annyang': () => { }
			};

			annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

			annyang.start({ autoRestart: false });
		}
	}

	closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceActiveSectionListening = false;
		this.voiceText = undefined;

		if(annyang){
      annyang.abort();
    }
	}*/
}
