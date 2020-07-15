import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'meetup',
    loadChildren: () => import('./meetup/meetup.module').then(m => m.MeetupModule),
  },
  { path: '**', redirectTo: 'meetup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
