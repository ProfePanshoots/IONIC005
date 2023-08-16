import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichajePageRoutingModule } from './fichaje-routing.module';

import { FichajePage } from './fichaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichajePageRoutingModule
  ],
  declarations: [FichajePage]
})
export class FichajePageModule {}
