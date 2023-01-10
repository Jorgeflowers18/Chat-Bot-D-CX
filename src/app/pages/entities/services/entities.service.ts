import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntEntity } from '../interfaces/entity.interface';
import { Configuration, OpenAIApi } from 'openai';
// import { OpenaiResponse } from '../interfaces/openaiResponse.interface';


@Injectable({
  providedIn: 'root'
})

export class EntitiesService {
  private apiUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  private configuration = new Configuration({
    apiKey: "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",
  });
  private openai = new OpenAIApi(this.configuration);
   

  getEntities():Observable<IntEntity[]>{
    return this.http.get<IntEntity[]>(this.apiUrl);
  }

  postCompletion(params:any):any{
    
    
    let resp= this.openai.createCompletion(params);
    return resp;

  }

}

