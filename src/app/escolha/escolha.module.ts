import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhaPageRoutingModule } from './escolha-routing.module';

import { EscolhaPage } from './escolha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaPageRoutingModule
  ],
  declarations: [EscolhaPage]
})
export class EscolhaPageModule {}
