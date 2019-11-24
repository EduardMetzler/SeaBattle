import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './componente/start/start.component';
import { LobbyComponent } from './componente/lobby/lobby.component';

const routes: Routes = [
  // { path: '',redirectTo: '/z',pathMatch: 'full'},
  {path: '', component: StartComponent},
  {path: ':id', component: LobbyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
