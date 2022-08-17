import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.sass']
})
export class CatalogPageComponent implements OnInit {
  cards: Card[] = [
    {title: 'Apple', cost: '4 р.', city: 'Нижний Новгород'},
    {title: 'Huawei', cost: 'бесплатно', city: 'Деревня'},
    {title: 'Huawei', cost: '5 коп.', city: 'Чебы'},
    {title: 'Motorola', cost: '13 560 790 $.', city: 'ОАЭ'},
    {title: 'Apple', cost: '1000 р.', city: 'МоскоуСити'},
    {title: 'Samsung', cost: '7 коп.', city: 'Чебы'}
  ]

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
