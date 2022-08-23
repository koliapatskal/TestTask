import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { UserAddFormComponent } from 'src/app/components/user-add-form/user-add-form.component';

const routes: Routes = [
  { path: '', component: UserAddFormComponent },
];

@NgModule({
  declarations: [
    UserAddFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserFormModule { }
