import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/result/:nick',
    component: ResultSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
