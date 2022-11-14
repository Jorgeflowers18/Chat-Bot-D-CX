import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { TimerCmpComponent } from './components/timer-cmp/timer-cmp.component';
import { DynCmpComponent } from './components/dyn-cmp/dyn-cmp.component';
import { SpeechCallsComponent } from './components/speech-calls/speech-calls.component';
import { BotApiComponent } from './components/bot-api/bot-api.component';
import { ApiDcxService } from './services/api-dcx.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerCmpComponent,
    DynCmpComponent,
    SpeechCallsComponent,
    BotApiComponent
  ],
  entryComponents:[
    TimerCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiDcxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
