import { Component, Input, OnInit, Output } from '@angular/core';
import { FormData } from 'src/app/interfaces/form-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  @Output() dataSignUp:FormData = {
    title: 'Регистрация',
    buttonSendData: 'Зарегистрироваться',
    questionTitle: 'Есть аккаунт?',
    questionLink: 'Войти',
    componentLink: '/login'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
