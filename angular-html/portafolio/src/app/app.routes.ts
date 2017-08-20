import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent,PorfolioItemComponent} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portafolio-item', component: PorfolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
