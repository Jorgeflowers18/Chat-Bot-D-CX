import { Component, OnInit, Input } from '@angular/core';
import { IntEntity } from '../interfaces/entity.interface';
import { OpenaiResponse } from '../interfaces/openaiResponse.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  @Input() entity!: IntEntity; 
  @Input() openai_response!: OpenaiResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
