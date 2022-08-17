import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewActiveLeft: boolean = true
  viewActiveRight: boolean = false

  itemsLeft =['', '', '', '', '', '', '', '', ''];
  itemsRight =['', '', ''];

  view() {
    this.viewActiveLeft = !this.viewActiveLeft
    this.viewActiveRight = !this.viewActiveRight
  }

}
