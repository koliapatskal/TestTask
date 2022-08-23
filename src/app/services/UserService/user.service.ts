import { BehaviorSubject } from "rxjs";
import { User } from "src/app/user";

export class UserService {
  private users$!: BehaviorSubject<User[]>;

  constructor() {
    this.getStorageUsers();
  }

  private getStorageUsers(){
    let jsonUsers = localStorage.getItem('app-users');
    if(jsonUsers){
      this.users$ = new BehaviorSubject<User[]>(JSON.parse(jsonUsers));
    } else {
      this.users$ = new BehaviorSubject<User[]>([]);
    }
  }

  public getAllUsers(): BehaviorSubject<User[]>{
    return this.users$;
  }
  /*
    Для ререндерінгу сторінки використав створення нового масиву,
    оскільки вона перемальовується тільки при зміні значення, а масив
    передається за посиланням, яке при модифікуванні не змінюється.

    Чи є такий спосіб правильним для ререндирингу сторінки?
    Чи буде він працювати так же швидко з масивом з 1е6 користувачів?
  */
  public addUser(user: User){
    let users = [...this.users$.getValue(), user]
    this.users$.next(users);
    this.saveData();
  }

  public saveData(){
    localStorage.setItem('app-users', JSON.stringify(this.users$.getValue()))
  }

  public getCount(): number{
    return this.users$.getValue().length;
  }  
}
