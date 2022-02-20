import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaUsuarioPageRoutingModule } from './conta-usuario-routing.module';

import { ContaUsuarioPage } from './conta-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaUsuarioPageRoutingModule
  ],
  declarations: [ContaUsuarioPage]
})
export class ContaUsuarioPageModule {}
