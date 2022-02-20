import { ToastController } from '@ionic/angular';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm=this.formBuilder.group({
    nome: ['', [Validators.required, Validators.maxLength(100)]],
    endereco: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.maxLength(100)]],
    senha: ['', [Validators.required, Validators.maxLength(100)]],
    confirmacao_senha: ['', [Validators.required, Validators.maxLength(100)]]
  });
  mostrarAviso: boolean=false;
  getNome(){
    return this.cadastroForm.get('nome').value;
  }
  getEndereco(){
    return this.cadastroForm.get('endereco').value;
  }
  getEmail(){
    return this.cadastroForm.get('email').value;
  }
  getSenha(){
    return this.cadastroForm.get('senha').value;
  }
  getConfirmacaoSenha(){
    return this.cadastroForm.get('confirmacao_senha').value;
  }

  constructor(private formBuilder: FormBuilder, private app_service: AppService, private router:Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  async mostrarMensagemUsuarioCadastrado() {
    const toast = await this.toastCtrl.create({
      message: 'Usuário cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
  cadastrar($event){
    let nome=this.getNome();
    let endereco=this.getEndereco();
    let email=this.getEmail();
    let senha=this.getSenha();
    let confirmacao_senha=this.getConfirmacaoSenha();
    let cliente=new Cliente(nome,endereco,email,senha);
    if(senha==confirmacao_senha){
      this.app_service.cadastrarCliente(cliente).subscribe(
        sucess =>{
        localStorage.setItem("email",email);
        this.mostrarMensagemUsuarioCadastrado();
        this.router.navigate(['/home']);
        },
        error=>{
          console.log("Usuário não cadastrado: "+error);
        }
      )
    }
    else{
      this.mostrarAviso=true;
    }
  }
}
