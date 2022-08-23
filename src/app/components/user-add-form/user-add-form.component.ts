import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/UserService/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {
  createdUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.createdUserForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      middlename: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      abilities: ['', [Validators.required]],
    });
  }

  clear():void{
    this.createdUserForm.reset();
  }

  addUser(): void{
    if(!this.createdUserForm.valid) return;

    let user: User = {
      id: this.userService.getCount() + 1,
      name: this.createdUserForm.get('name')?.value,
      surname: this.createdUserForm.get('surname')?.value,
      middlename: this.createdUserForm.get('middlename')?.value,
      sex: this.createdUserForm.get('sex')?.value,
      birth: this.createdUserForm.get('birth')?.value,
      abilities: this.createdUserForm.get('abilities')?.value,
      status: false,
    }
    
    this.userService.addUser(user);
    this.clear();
  }
}
