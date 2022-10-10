import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Entity } from './interfaces/entity.interface';
import { EntitiesService } from './services/entities.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  
  entities!: Entity[];

  constructor(private entitySvc: EntitiesService) { }

  ngOnInit(): void {
    this.entitySvc.getEntities()
    .pipe(
      tap(
        (entities): Entity[]=> this.entities = entities)
    ).subscribe();

  }

}
