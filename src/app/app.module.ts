import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Pagina02Component } from './pagina02/pagina02.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { FormsModule } from "@angular/forms";
import { UpdadeComponent } from './users/updade/updade.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';


@NgModule({
  declarations: [
    AppComponent,
    Pagina01Component,
    Pagina02Component,
    UsersComponent,
    CreateUsersComponent,
    UpdadeComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
