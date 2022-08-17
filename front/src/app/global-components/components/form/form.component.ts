import { Component, Output, Input, OnInit } from '@angular/core';
import { FormData } from 'src/app/interfaces/form-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { TokenInterface } from 'src/app/interfaces/token-interface';
// import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {
  response: any
  loginForm!: FormGroup 

  @Input() data:FormData = {
    title: '',
    buttonSendData: '',
    questionTitle: '',
    questionLink: '',
    componentLink: ''
  }
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submitLogin(){
    if(this.data.title === "Регистрация"){
      this.http.post("http://localhost:9000/user/sign-up", 
        this.loginForm.value,
      ).subscribe({
          error: (e) => console.error(e),
          complete: () => { 
            this.http.post<TokenInterface>("http://localhost:9000/user/log-in", 
              this.loginForm.value,
              {
                withCredentials: true
              }
            ).subscribe({
                next: (e) =>{
                  localStorage.setItem("accessToken", e.accessToken)
                },
                complete: () => {
                  this.router.navigate(['/home'])
                }
            })
          }
      })
      // console.log(this.loginForm.value)
    }else if(this.data.title === "Вход"){
      this.response = this.http.post<TokenInterface>("http://localhost:9000/user/log-in", 
        this.loginForm.value,
        {
          withCredentials: true
        }
      ).subscribe({
          next: (e) =>{
            localStorage.setItem("accessToken", e.accessToken)
          },
          complete: () => {
            this.router.navigate(['/home'])
          }
      })
    }
  }
}
