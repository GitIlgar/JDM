import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.sass']
})
export class ProfileIconComponent implements OnInit {

  visibility: boolean = true
  toggle() {
    this.visibility = !this.visibility
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submitLogout(): void{
    this.visibility = !this.visibility
    if(localStorage.getItem("accessToken")) {
      this.http.get("http://localhost:9000/user/log-out",
        {
          withCredentials: true
        }
      ).subscribe({
        complete: () => {
          localStorage.removeItem("accessToken")
          this.router.navigate([''])
        },
        error: (e) => {
          console.error(e)
        }
      })
    }
    // localStorage.removeItem("accessToken")
    
  }

}
