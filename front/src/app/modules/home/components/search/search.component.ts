import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Output() onEnter = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.onEnter.emit("anyValue")
  }
}
