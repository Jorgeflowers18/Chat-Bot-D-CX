import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { MaterialModule } from 'app/material.module';
// import { MessagesComponent } from './message/messages.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    EntitiesComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    MaterialModule,
    EntitiesModule
  ]
})
export class EntitiesModule { }
