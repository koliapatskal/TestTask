import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSortModule} from '@angular/material/sort';

import { UserTableComponent } from 'src/app/components/user-table/user-table.component';
import { MyTableCellComponent } from 'src/app/components/my-table-cell/my-table-cell.component';
import { MyTableCellDirective } from 'src/app/directives/my-table-cell.directive';
import { StretchCellDirective } from 'src/app/directives/table/stretch-cell.directive';
import { StretchSortCellDirective } from 'src/app/directives/table/stretch-sort-cell.directive';
import { StretchTableDirective } from 'src/app/directives/table/stretch-table.directive';


const routes: Routes = [
  { path: '', component: UserTableComponent, },
];

@NgModule({
  declarations: [
    UserTableComponent,
    MyTableCellComponent,
    MyTableCellDirective,
    StretchCellDirective,
    StretchSortCellDirective,
    StretchTableDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ],
  
})
export class UserTableModule { }
