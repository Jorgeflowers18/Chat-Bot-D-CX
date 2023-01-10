import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { tap } from 'rxjs';
import { IntEntity } from './interfaces/entity.interface';
import { EntitiesService } from './services/entities.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  
  entities!: IntEntity[];

  constructor(private entitySvc: EntitiesService) { }

  ngOnInit(): void {
    /*this.entitySvc.getEntities()
    .pipe(
      tap(
        (entities): IntEntity[]=> this.entities = entities)
    ).subscribe();*/

    
    let configuration = new Configuration({
      apiKey: "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",
    });
    let openai = new OpenAIApi(configuration);



    let oai_resp = this.entitySvc.postCompletion;
    const params  = {
      model: "text-davinci-003",
      prompt: "Hola, quien eres?",
      max_tokens: 10,
      temperature: 0.3
    };



    let resp = openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Hola, quien eres?",
      max_tokens: 10,
      temperature: 0.3
    });

    console.log(resp);






    console.log(oai_resp);

  }

}
