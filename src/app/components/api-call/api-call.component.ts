import { Component } from '@angular/core';
import { ApiSrvService } from '../services/api-srv.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})

export class ApiCallComponent  {
  // private q: string;
  constructor(private api:ApiSrvService) { }

  

  btnCall(){
    let q = 'hola chati';
    this.api.callApi(q)
  }

}
