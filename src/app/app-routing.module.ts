import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './pages/animation/animation.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.components';
import { SpeechtotextComponent } from './pages/speechtotext/speechtotext.component';
import { EntitiesComponent } from './pages/entities/entities.component';

const routes: Routes = [
  { path: 'animation', component: AnimationComponent },
  { path: 'chati', component: SpeechtotextComponent },
  { path: 'pages', component: ChatbotComponent },
  { path: 'entities', component: EntitiesComponent },
  //{ path: 'entities', loadChildren: () => import('./pages/entities/entities.module').then((m) => m.EntitiesModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
