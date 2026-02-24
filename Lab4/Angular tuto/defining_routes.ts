import {Routes} from '@angular/router';
import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
  {
    path: '',
    title: 'App home Page',
    component: Home,
  },

  {
    path: 'user',
    title: 'User Page',
    component: User,
  },
];
