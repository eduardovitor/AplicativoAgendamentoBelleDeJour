import { AppService } from './../../../services/app.service';
import {Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { ToastController } from '@ionic/angular';
import { Agendamento } from './agendamento.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  mostrarAgendamentoHora: boolean=false;
  myDate;
  data_escolhida;
  hora_escolhida;
  constructor(public modalCtrl: ModalController, private toastctrl: ToastController, private app_service:AppService) { }

  ngOnInit() {

  }
  async dataAgendada() {
    const toast = await this.toastctrl.create({
      message: 'Data escolhida com sucesso!',
      duration: 2000
    });
    toast.present();
    const { role } = await toast.onDidDismiss();
  }
  async horaAgendada() {
    const toast2 = await this.toastctrl.create({
      message: 'Horário escolhido com sucesso!',
      duration: 2000
    });
    toast2.present();
    const { role } = await toast2.onDidDismiss();
  }

  async calendarioAgendamento(){
    const options: CalendarModalOptions = {
      title: '',
      doneLabel: 'Salvar',
      weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      disableWeeks: [0, 6]
    };
 
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
 
    myCalendar.present();
 
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    let dia=date.date.toString();
    let mes=date.months.toString();
    let ano=date.years.toString();
    let dia_mes=dia.concat("/",mes);
    let dia_mes_ano=dia_mes.concat("/",ano);
    console.log(dia_mes_ano);
    this.mostrarAgendamentoHora=true;
    this.data_escolhida=dia_mes_ano;
    this.dataAgendada();
  }
  finalizarAgendamento(){
    this.mostrarAgendamentoHora=false;
    this.horaAgendada();
    let hora=this.myDate.toString().split("T");
    hora=hora[1].split(":");
    hora=hora[0].concat(":",hora[1]);
    this.hora_escolhida=hora;
    console.log(hora);
    this.myDate=null;
    let agendamento=new Agendamento(localStorage.getItem("email"),this.data_escolhida,this.hora_escolhida);
    this.app_service.cadastrarAgendamento(agendamento).subscribe(
      sucess =>{
        console.log("Agendamento inserido");
      },
      error => {
        console.log(""+error);
      }
    )
    this.data_escolhida=null;
    this.hora_escolhida=null;
  }
}


