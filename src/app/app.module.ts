import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './services/UserService/user.service';
import { UserTableComponent } from './components/user-table/user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-table', component: UserTableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
