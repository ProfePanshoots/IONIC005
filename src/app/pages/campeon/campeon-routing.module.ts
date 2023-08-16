import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonPage } from './campeon.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonPageRoutingModule {}
