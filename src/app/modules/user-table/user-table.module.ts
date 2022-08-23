import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserTableComponent } from 'src/app/components/user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserTableComponent, },
];

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class UserTableModule { }
