import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForDirectiveComponent } from 'src/app/components/for-directive/for-directive.component';

import { AppComponent } from './app.component';
import { UserService } from './services/UserService/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { CatDirectiveDirective } from './directives/cat-directive.directive';
import { MyTableCellComponent } from './components/my-table-cell/my-table-cell.component';
import { MyTableCellDirective } from './directives/my-table-cell.directive';
import { Cat2Directive } from './directives/cat2.directive';
import { StretchCellDirective } from './directives/table/stretch-cell.directive';
import { StretchSortCellDirective } from './directives/table/stretch-sort-cell.directive';
import { StretchTableDirective } from './directives/table/stretch-table.directive';



const routes: Routes = [
  { path: 'user-table', loadChildren: () => import('./modules/user-table/user-table.module').then(m => m.UserTableModule) },
  { path: 'user-form', loadChildren: () => import('./modules/user-form/user-form.module').then(m => m.UserFormModule), outlet: 'form' },
];

@NgModule({
  declarations: [
    AppComponent,
    ForDirectiveComponent,
    CatDirectiveDirective,
    Cat2Directive,



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
