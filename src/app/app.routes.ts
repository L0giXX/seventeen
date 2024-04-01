import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
    children: [
      {
        path: 'member/:id',
        component: MembersComponent,
      },
    ],
  },
];
