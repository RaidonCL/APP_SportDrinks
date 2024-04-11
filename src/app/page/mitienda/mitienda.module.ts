import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitiendaPageRoutingModule } from './mitienda-routing.module';

import { MitiendaPage } from './mitienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitiendaPageRoutingModule
  ],
  declarations: [MitiendaPage]
})
export class MitiendaPageModule {}
