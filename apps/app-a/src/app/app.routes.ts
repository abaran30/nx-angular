import { Route } from '@angular/router';
import { CheeseComponent } from '../cheese/cheese.component';
import { PotatoComponent } from '../potato/potato.component';

export const appRoutes: Route[] = [
  {
    path: '', component: PotatoComponent
  },
  {
    path: 'cheese', component: CheeseComponent
  }
];
