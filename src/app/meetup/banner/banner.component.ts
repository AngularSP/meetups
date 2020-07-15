import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public data$: Observable<any>;
  public talkIdx = 0;

  constructor(
    private meetupService: MeetupService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const meetupId = this.router.snapshot.params.id;
    this.talkIdx = this.router.snapshot.params.talk - 1;

    this.data$ = this.meetupService.getEvents().pipe(
      map((data) => data.find(item => item.id === +meetupId))
    );
  }

}
