import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAgendamentosPageRoutingModule } from './ver-agendamentos-routing.module';

import { VerAgendamentosPage } from './ver-agendamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAgendamentosPageRoutingModule
  ],
  declarations: [VerAgendamentosPage]
})
export class VerAgendamentosPageModule {}
