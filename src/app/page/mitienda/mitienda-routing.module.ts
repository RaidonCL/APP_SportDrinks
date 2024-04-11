import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitiendaPage } from './mitienda.page';

const routes: Routes = [
  {
    path: '',
    component: MitiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitiendaPageRoutingModule {}
