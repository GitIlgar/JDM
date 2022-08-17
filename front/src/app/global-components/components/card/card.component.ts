import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  
  @Input() card: Card ={
    title: '',
    cost: '',
    city: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
