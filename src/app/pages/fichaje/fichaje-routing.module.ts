import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichajePage } from './fichaje.page';

const routes: Routes = [
  {
    path: '',
    component: FichajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichajePageRoutingModule {}
