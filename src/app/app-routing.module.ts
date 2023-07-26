import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ReadCountryComponent } from './countries/pages/read-country/read-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
    pathMatch: 'full',
  },
  {
    path: 'country/:id',
    component: ReadCountryComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
