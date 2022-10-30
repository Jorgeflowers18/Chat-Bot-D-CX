import { Component, NgZone, OnInit, } from '@angular/core';

declare var annyang: any;
declare var formComponent: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}
  ngOnInit(){
	this.initializeVoiceRecognitionCallback()
  }
  initializeVoiceRecognitionCallback(): void {
	annyang.setLanguage("es-EC");
    annyang.start();
	annyang.addCallback('resultMatch', (frases: any) => {
		annyang.pause();
      console.log(frases);
      var status_annyang = formComponent.waitBot(1);
      if (status_annyang == 200) {
        console.log('Reiniciando servicio.');
        console.log('Código:' + status_annyang);
        annyang.start();
      }
      //loguearVozDetectada(`<strong>Probablemente has dicho: </strong> <br> ${frases.join("<br>")}`);
    });
	let comandos ={
		"Hola chaty":()=> {        
            //annyang.removeCommands(["Hola", "Helo", "Ola", "Ayudame con algo"]);
			console.log("Reconocido");
        },
		"estado actual":()=> {        
            //annyang.removeCommands(["Hola", "Helo", "Ola", "Ayudame con algo"]);
			console.log("Reconocido");
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
