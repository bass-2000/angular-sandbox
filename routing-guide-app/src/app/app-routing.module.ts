import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
  { path: 'servers', component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
    ] },
  { path: '', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
