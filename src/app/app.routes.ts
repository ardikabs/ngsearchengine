import { RouterModule, Routes} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const routes:Routes=[
  {path:"", component:SearchComponent},
  {path:"about",component:AboutComponent}
];

export const routing = [
    RouterModule.forRoot(routes)
];