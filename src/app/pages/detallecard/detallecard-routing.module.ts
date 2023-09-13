import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecardPage } from './detallecard.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecardPageRoutingModule {}
