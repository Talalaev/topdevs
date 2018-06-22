import {Component, Input, OnInit} from '@angular/core';

import { PresentationService } from '../../services/presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  campaing: Campaign = {
    canvas: {
      display_height: 0,
      display_width: 0,
      diagonal: 0,
      height: 0,
      width: 0,
      orientation: ''
    },
    title: '',
    slides: [],
    token: ''
  };

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.presentationService
      .getCampaing()
      .then(campaing => this.campaing = campaing);
  }
}
