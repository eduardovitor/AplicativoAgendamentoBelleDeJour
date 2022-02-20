export class Agendamento{
  email: string;
  data_agendamento:string;
  hora_agendamento:string;
  constructor(email, data_agendamento, hora_agendamento){
    this.email=email;
    this.data_agendamento=data_agendamento;
    this.hora_agendamento=hora_agendamento;
  }
}