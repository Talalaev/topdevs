import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input()
  slide: Slide = {
    delay: 0,
    elements: [],
    token: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
