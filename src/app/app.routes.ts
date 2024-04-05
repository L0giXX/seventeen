import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MusicComponent } from './music/music.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent,
  },
];
