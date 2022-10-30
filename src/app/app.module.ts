import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { TimerCmpComponent } from './components/timer-cmp/timer-cmp.component';
import { DynCmpComponent } from './components/dyn-cmp/dyn-cmp.component';
import { SpeechCallsComponent } from './components/speech-calls/speech-calls.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerCmpComponent,
    DynCmpComponent,
    SpeechCallsComponent
  ],
  entryComponents:[
    TimerCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
