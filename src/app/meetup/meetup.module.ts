import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { MeetupRoutingModule } from './meetup-routing.module';
import { MeetupComponent } from './meetup.component';

@NgModule({
  declarations: [
    MeetupComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    MeetupRoutingModule
  ]
})
export class MeetupModule { }
