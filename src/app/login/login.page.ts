import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Login } from './login.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm=this.formBuilder.group({
    email: ['', [Validators.required, Validators.maxLength(100)]],
    senha: ['', [Validators.required, Validators.maxLength(100)]]
  });
  erroLogin:boolean=false;
  getEmail(){
    return this.loginForm.get('email').value;
  }
  getSenha(){
    return this.loginForm.get('senha').value;
  }
  constructor(private router:Router, private formBuilder: FormBuilder, private app_service:AppService, private toastctrl:ToastController) { }

  ngOnInit() {

  }
  async mostrarMensagemUsuarioCadastrado() {
    const toast = await this.toastctrl.create({
      message: 'Sessão iniciada',
      duration: 2000
    });
    toast.present();
  }
  fazerLogin(event){
    let email=this.getEmail();
    let senha=this.getSenha();
    let login=new Login(email,senha);
    this.app_service.fazerLogin(login).subscribe(
      success=>{
        console.log("Usuário válido!");
        this.mostrarMensagemUsuarioCadastrado();
        localStorage.setItem("email",email);
        this.router.navigate(['/home']);
      },
      error=>{
        console.log("O erro é:"+error);
        this.erroLogin=true;
        console.log(this.erroLogin);
      }
    )
  }
}
