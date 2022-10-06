import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<p>
              <mat-toolbar color="primary">
                <mat-toolbar-row>
                  <span> UTPL ChatBot - CHATI</span>
                </mat-toolbar-row>
                <mat-toolbar-row>
                  <span>Created by: Jorge Flores </span>
                </mat-toolbar-row>
              </mat-toolbar>
            </p>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent   {
}
