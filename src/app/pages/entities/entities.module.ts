import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    MaterialModule
  ]
})
export class EntitiesModule { }
