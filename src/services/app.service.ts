import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {take, delay} from 'rxjs/operators'
import { Agendamento } from 'src/app/home/agendamento/agendamento.model';
import { Login } from 'src/app/login/login.model';
import { Cliente } from 'src/app/cadastro/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API=environment.API;
  constructor(private http: HttpClient) { 

  }
  fazerLogin(dados_cliente){
    return this.http.post(this.API + "fazerLogin.php",dados_cliente).pipe(take(1));
  }
  cadastrarCliente(cliente){
    return this.http.post(this.API + "cadastrarCliente.php",cliente).pipe(take(1));
  }
  retornarAgendamentos(email_cliente){
    return this.http.post(this.API+ "retornarAgendamentos.php", email_cliente, {responseType: 'text'}).pipe(delay(2000));
  }
  cadastrarAgendamento(agendamento){
    return this.http.post(this.API + "cadastrarAgendamento.php",agendamento).pipe(take(1));
  }
  cancelarAgendamento(agendamento){
    return this.http.delete(this.API + "cancelarAgendamento.php",agendamento).pipe(take(1));
  }
}
