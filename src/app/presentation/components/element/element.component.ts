import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input()
  element: SlideElement = {
    style: {
      'background-color': '',
      color: ''
    },
    layout: {
      bottom: 0,
      right: 0,
      top: 0,
      left: 0,
    },
    type: '',
    token: ''
  };

  constructor() { }

  ngOnInit() {
  }
}
