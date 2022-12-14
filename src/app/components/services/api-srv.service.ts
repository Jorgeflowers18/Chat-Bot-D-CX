import { Observable } from 'rxjs';
import { SessionsClient } from '@google-cloud/dialogflow-cx/build/src/v3';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiSrvService {
  constructor(private api_obj: SessionsClient) {}

  callApi(q: string) {
    const projectId = 'test-bot-pt9k';
    const location = 'global';
    const agentId = '154fda09-090e-4258-8bb4-dbe510d4098e';
    const query = q;
    const languageCode = 'es';
    const sessionId = '1';

    const sessionPath = this.api_obj.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
        },
        languageCode,
      },
    };

    //let resp = this.api_obj.detectIntent(request)
    //console.log(resp)
  }
}
