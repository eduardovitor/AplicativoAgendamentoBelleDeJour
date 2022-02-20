import { VerAgendamentosPageModule } from './ver-agendamentos/ver-agendamentos.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoPageModule } from './agendamento/agendamento.module';
import { HomePage } from './home.page';
import { ContaUsuarioPageModule } from './conta-usuario/conta-usuario.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'agendamento',
        children: [
          {
            path: '',
            loadChildren: () =>import('./agendamento/agendamento.module').then(m => AgendamentoPageModule)
          }
        ]
      },
      {
        path: 'ver-agendamentos',
        children: [
          {
            path: '',
            loadChildren: () =>import('./ver-agendamentos/ver-agendamentos.module').then(m => VerAgendamentosPageModule)
          }
        ]
      },
      {
        path: 'conta-usuario',
        children: [
          {
            path: '',
            loadChildren: () =>import('./conta-usuario/conta-usuario.module').then(m => ContaUsuarioPageModule)
          }
        ]
      }
    ]
  },
    {
      path: '',
      redirectTo: 'tabs/agendamento',
      pathMatch: 'full'
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
