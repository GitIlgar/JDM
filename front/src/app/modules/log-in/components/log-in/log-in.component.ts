import { Component, OnInit, Output } from '@angular/core';
import { FormData } from 'src/app/interfaces/form-data';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  @Output() dataLogIn:FormData = {
    title: 'Вход',
    buttonSendData: 'Войти',
    questionTitle: 'В первый раз у нас?',
    questionLink: 'Зарегистрироваться',
    componentLink: '/sign-up'
  }
  linkSignUp(){
    console.log("log login");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
