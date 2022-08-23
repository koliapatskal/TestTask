import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/user';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  //Змінна для збереження підписок, від яких будуть відписуватись при знищенні компоненту
  private subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['name', 'status', 'buttons'];
  dataSource!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getSubscribe();
  }

  getSubscribe(): void{
    const data = this.userService.getAllUsers().subscribe(p => {this.dataSource = p});
    this.subscriptions.push(data);
  }

  accept(user: User){
    user.status = true;
    this.userService.saveData();
  }

  reject(user: User){
    user.status = false;
    this.userService.saveData();
  }

  //Метод відписки
  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
