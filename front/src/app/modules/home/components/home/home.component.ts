import { Component, OnInit, EventEmitter } from '@angular/core';
// import { LogoComponent } from 'src/app/global-components/components/logo/logo.component';
// import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  parrent(value: string){
    console.log(value)
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("accessToken"))
      return true
    return false
  }
  token: boolean = this.isLoggedIn()

  constructor() { }

  ngOnInit(): void {
  }

}
