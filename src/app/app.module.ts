import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ChatbotComponent } from './pages/chatbot/chatbot.components';
import { EntityComponent } from './pages/entities/entity/entity.component';
import { HttpClientModule} from '@angular/common/http';
import { SpeechtotextComponent } from './pages/speechtotext/speechtotext.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { EntitiesComponent } from './pages/entities/entities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatbotComponent,
    EntityComponent,
    EntitiesComponent,
    SpeechtotextComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
