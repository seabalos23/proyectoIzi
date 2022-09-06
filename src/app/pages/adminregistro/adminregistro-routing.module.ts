import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminregistroPage } from './adminregistro.page';

const routes: Routes = [
  {
    path: '',
    component: AdminregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminregistroPageRoutingModule {}
