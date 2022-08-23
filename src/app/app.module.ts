import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './services/UserService/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'user-table', loadChildren: () => import('./modules/user-table/user-table.module').then(m => m.UserTableModule) },
  { path: 'user-form', loadChildren: () => import('./modules/user-form/user-form.module').then(m => m.UserFormModule), outlet: 'form' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
