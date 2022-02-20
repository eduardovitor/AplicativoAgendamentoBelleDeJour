import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaUsuarioPage } from './conta-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ContaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaUsuarioPageRoutingModule {}
