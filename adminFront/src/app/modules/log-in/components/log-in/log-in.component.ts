import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submitLogin() {

  }

}
