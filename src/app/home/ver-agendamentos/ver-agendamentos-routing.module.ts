import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAgendamentosPage } from './ver-agendamentos.page';

const routes: Routes = [
  {
    path: '',
    component: VerAgendamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAgendamentosPageRoutingModule {}
