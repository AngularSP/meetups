import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { MeetupComponent } from './meetup.component';

const routes: Routes = [
  {
    path: '',
    component: MeetupComponent,
  },
  {
    path: ':id/banner/:talk',
    component: BannerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetupRoutingModule { }
