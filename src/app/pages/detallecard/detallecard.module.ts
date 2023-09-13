import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecardPageRoutingModule } from './detallecard-routing.module';

import { DetallecardPage } from './detallecard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecardPageRoutingModule
  ],
  declarations: [DetallecardPage]
})
export class DetallecardPageModule {}
