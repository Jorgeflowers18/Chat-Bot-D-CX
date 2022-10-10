import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../interfaces/entity.interface';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private apiUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getEntities():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.apiUrl);
  }
}
