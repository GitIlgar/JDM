import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.sass']
})
export class BurgerComponent implements OnInit {
  blur: boolean = false;
  hidden: boolean = true;
  BurgerShow:string = "none"
  // @HostBinding('class.burger__opened') burgerOpened = false;

  constructor() {}

  ngOnInit(): void {
    
  }
  toogleNavbar() {
    this.blur = !this.blur;
    if (this.BurgerShow == "none")
      {
        this.BurgerShow = "block";
        this.hidden = !this.hidden;
      }
    else
    {
      this.BurgerShow = "none";
      this.hidden = !this.hidden;
    }
    
  }

}
