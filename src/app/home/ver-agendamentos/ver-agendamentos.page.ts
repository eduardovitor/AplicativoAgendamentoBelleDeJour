import { AppService } from './../../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento/agendamento.model';

@Component({
  selector: 'app-ver-agendamentos',
  templateUrl: './ver-agendamentos.page.html',
  styleUrls: ['./ver-agendamentos.page.scss'],
})
export class VerAgendamentosPage implements OnInit {
  agendamentos:any;
  email=localStorage.getItem("email");
  constructor(private app_service:AppService) { }

  ngOnInit() {
    
  }
  mostrarAgendamentos(event){
    console.log(localStorage.getItem("email"));
    this.app_service.retornarAgendamentos(this.email).subscribe(
    (agendamento) =>{
      this.agendamentos=agendamento;
      console.log(agendamento);
    }
    )
  }
}
