import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminregistroPageRoutingModule } from './adminregistro-routing.module';

import { AdminregistroPage } from './adminregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminregistroPageRoutingModule
  ],
  declarations: [AdminregistroPage]
})
export class AdminregistroPageModule {}
