import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './pages/chatbot/chatbot.components';

const routes: Routes = [
  { path: 'chat-bot', component: ChatbotComponent},
  { path: 'entities', loadChildren: () => import('./pages/entities/entities.module').then(m => m.EntitiesModule) },
  { path: '**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
