import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

import { UserAddFormComponent } from './user-add-form.component';

describe('UserAddFormComponent', () => {
  let component: UserAddFormComponent;
  let fixture: ComponentFixture<UserAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddFormComponent ],
      providers: [UserService, FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createdUserForm should be init', () => {
    let result = component.createdUserForm !== undefined;
    expect(result).toBeTrue();
  });
});
