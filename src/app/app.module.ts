import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TimerCmpComponent } from './components/timer-cmp/timer-cmp.component';
import { DynCmpComponent } from './components/dyn-cmp/dyn-cmp.component';
import { SpeechCallsComponent } from './components/speech-calls/speech-calls.component';
import { ApiDcxService } from './services/api-dcx.service';
import { TrainComponentComponent } from './components/train-component/train-component.component';

@NgModule({
    declarations: [
        AppComponent,
        TimerCmpComponent,
        DynCmpComponent,
        SpeechCallsComponent,
        TrainComponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
        
    ],
    providers: [ApiDcxService],
    bootstrap: [AppComponent]
})
export class AppModule { }
