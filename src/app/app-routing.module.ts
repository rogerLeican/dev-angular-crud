import { CreateUsersComponent } from './users/create-users/create-users.component';
import { UsersComponent } from './users/users.component';
import { Pagina02Component } from './pagina02/pagina02.component';
import { Pagina01Component } from './pagina01/pagina01.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'pagina01',component: Pagina01Component },
  {path: 'pagina02',component: Pagina02Component },
  {path: 'users',component:UsersComponent  },
  {path: 'users/create',component:CreateUsersComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
