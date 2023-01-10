import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment, apiKey } from 'src/environments/environment.prod';
import { SessionsClient } from '@google-cloud/dialogflow-cx';


declare var api_client: SessionsClient;

@Injectable({
  providedIn: 'root',
})
export class ApiDcxService {
  //private api_url = 'https://content-dialogflow.googleapis.com/v3/';

  // Constructor importando HTTP para uso de urls HTTP
  constructor(private http: HttpClient,
    //private api_c: SessionsClient
    ) {}

  // Llamada de API
  // getResponse(_url: string, q: string, languageCode: string): Observable<any> {
  //   console.log(this.http.get<any[]>(this.api_url),);
  //   return this.http.get<any[]>(this.api_url);
  // }

 
  // Funciones de prueba de service
  hi() {
    console.log('Comando reconocido.');
  }
  waitBot(num: number) {
    let response = 200;
    // this.viewContainer.remove();
    return response;
  }
}
