import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTask';

  constructor(private router: Router){}

  /*
    Хотів зробити перехід за посиланням без зміни url, але
    не зрозумів як це зробити. Знаю, що для цього використовують 
    
    skipLocationChange: true.

    Можливо це через метод navigate, а не navigateUrl. Поки це перевіряв.
    Якщо десь помилився, буду радий почути коректне рішення
  */

  toTable(){
    this.router.navigate([{ outlets: {primary: 'user-table'}}])
  }

  toForm(){
    this.router.navigate([{ outlets: {form: 'user-form'}}])
  }
}
