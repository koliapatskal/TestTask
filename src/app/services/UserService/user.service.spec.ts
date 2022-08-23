import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllUsers should return BehaviorSubject', () => {
    let returnData = service.getAllUsers();
    expect(returnData instanceof BehaviorSubject).toBe(true);
  });

  it('getCount should return number', () => {
    let returnData = service.getCount();
    expect(typeof returnData).toBe('number');
  });
});
