import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/UserService/user.service';
import { User } from 'src/app/user';

import { UserTableComponent } from './user-table.component';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableComponent ],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('accept should change status on "true"', () => {
    let user: User = {id: 1, name:'2', surname:'3', middlename:'4', sex:'man', abilities:'sd', status:false, birth: new Date() }
    component.accept(user);
    expect(user.status).toEqual(true);
  });

  it('reject should change status on "false"', () => {
    let user: User = {id: 1, name:'2', surname:'3', middlename:'4', sex:'man', abilities:'sd', status:true, birth: new Date() }
    component.reject(user);
    expect(user.status).toEqual(false);
  });

  it('dataSource should be init', () => {
    let result = component.dataSource !== undefined;
    expect(result).toBeTrue();
  });
});
