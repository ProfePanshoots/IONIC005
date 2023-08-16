import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonPageRoutingModule } from './campeon-routing.module';

import { CampeonPage } from './campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonPageRoutingModule
  ],
  declarations: [CampeonPage]
})
export class CampeonPageModule {}
