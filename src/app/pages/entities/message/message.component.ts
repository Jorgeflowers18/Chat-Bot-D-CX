import { Component, OnInit } from '@angular/core';
import { Entity } from '../interfaces/entity.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  messages : Entity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
