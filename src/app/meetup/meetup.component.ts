import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MeetupService } from './meetup.service';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  public events$: Observable<any>;

  constructor(private meetupService: MeetupService) { }

  ngOnInit(): void {
    this.events$ = this.meetupService.getEvents();
  }

}
